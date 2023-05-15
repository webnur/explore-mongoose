import { NextFunction, Request, Response } from "express"
import { createUserToBd, getUserFromDb } from "./user.service"


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUserFromDb();
    res.status(200).json({
        status: 'success',
        data: users
    })
}

export const createUse = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToBd(data);
    res.status(200).json({
        status: 'success',
        data: user,
    })
}

// pattern
// Route -> controller -> service