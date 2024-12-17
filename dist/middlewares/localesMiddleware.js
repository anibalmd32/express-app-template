"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = localesMiddleware;
function localesMiddleware(req, res, next) {
    const locale = req.cookies.lang || "es";
    res.locals.lang = locale;
    res.locals._req = req;
    next();
}
