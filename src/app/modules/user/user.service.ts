import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToBd = async (payload: IUser):Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    return user;

}

export const getUserFromDb =async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}