import { NextFunction, Request, Response } from "express"
import { createUserToBd } from "./user.service"

export const createUse = async(req: Request, res: Response, next: NextFunction) => {

    const user = await createUserToBd();
    res.status(200).json({
        status: 'success',
        data: user,
    })
}

// pattern
// Route -> controller -> service