"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicesApp {
    registerApp(app) {
        app.get("/services/change-lang/:lang", (req, res) => {
            const { lang } = req.params;
            const previousUrl = req.get("Referrer") || "/";
            res.setLocale(lang);
            res.cookie("lang", lang, { httpOnly: true });
            res.locals.lang = lang;
            res.redirect(previousUrl);
        });
    }
}
exports.default = ServicesApp;
