// Import the Express framework
import express from "express";

// Import the controller for user-related operations
import MyUserController from "../controllers/MyUserController";

// Import middleware functions for authentication
import { jwtCheck, jwtParse } from "../middleware/auth";

// Create a new router instance
const router = express.Router();

// Define a POST route for creating a new user
// Use jwtCheck middleware to ensure authentication before creating a user
// The jwtCheck middleware verifies the JWT token attached to the request
// The MyUserController.createCurrentUser method handles the creation of the user
router.post("/", jwtCheck, MyUserController.createCurrentUser);

// Define a PUT route for updating a user
// Use jwtCheck and jwtParse middleware to ensure authentication and parse JWT token
// The jwtParse middleware extracts user information from the JWT token
// The MyUserController.updateCurrentUser method handles the update of the user
router.put("/", jwtCheck, jwtParse, MyUserController.updateCurrentUser);

// Export the router for use in other modules
export default router;
