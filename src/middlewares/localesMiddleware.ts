import { Request, Response, NextFunction } from "express";

export default function localesMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const locale = req.cookies.lang || "es";
    res.locals.lang = locale;
    res.locals._req = req;
    next();
}
