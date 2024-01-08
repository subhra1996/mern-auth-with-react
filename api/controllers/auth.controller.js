import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hashesdPassword= bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashesdPassword});

    try{
        await newUser.save();
        res.status(200).json({message: 'user connected successfully'});
    }
    catch(error){
        next(error);
    }
}