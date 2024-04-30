import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";

// Declare custom properties for Express Request object
declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0id: string;
    }
  }
}
// Middleware to authenticate the JWT token
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

// it is used to extract the userId from mongoDb for updating profile
export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get the Authorization header from the request
  const { authorization } = req.headers;
  //   keep space after Bearer  bcz token is like Bearer kjgdjgdllkbdljgldbfmsbfmskjfd
  // Check if Authorization header exists and starts with "Bearer "
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401);
  }

  //  we get the token form authorization string
  //  Bearer kjgdjgdllkbdljgldbfmsbfmskjfd it spliting the string based on space in middle item[0]:[Bearer] , item[1]>[kjgdjgdllkbdljgldbfmsbfmskjfd]
  //   here we initialize itme[1] as token
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload; // Decode the JWT token
    const auth0Id = decoded.sub; // Extract the user's Auth0 ID from the decoded token

    const user = await User.findOne({ auth0Id }); // Find the user in the database using their Auth0 ID
    if (!user) {
      return res.sendStatus(404); // Send 404 Not Found status if the user is not found
    }

    // Declare custom property as global at the top of snipppet
    // Attach the auth0Id and user object to the req object for further use2
    req.auth0id = auth0Id as string;
    req.userId = user._id.toString();

    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error("Error decoding token:", error); // Log any errors that occur during token decoding
    return res.sendStatus(401); // Send 401 Unauthorized status if an error occurs
  }
};
