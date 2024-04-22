import { Request,Response } from "express";

const createCurrentUser=async(req:Request,res:Response)=>{
    // 1. check if the User exists
    // 2. create the  user if it doesn't exist
    // 3. retrun user object  the frontend (calling client)
}

export default {
    createCurrentUser,
}