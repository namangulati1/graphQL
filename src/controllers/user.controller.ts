import { User } from "../models/user.model.js";


export const getAllUsers = async () => {
    const users = await User.find();
    return users;
}

export const getUserById = async (parent: any, args: { id: string }) => {
    const user = await User.findById(args.id);
    return user;
}