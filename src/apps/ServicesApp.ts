import express from "express";

export default class ServicesApp {
    public registerApp(app: express.Application) {
        app.get("/services/change-lang/:lang", (req, res) => {
            const { lang } = req.params as unknown as { lang: string };
            const previousUrl = req.get("Referrer") || "/";

            res.setLocale(lang);
            res.cookie("lang", lang, { httpOnly: true });
            res.locals.lang = lang;

            res.redirect(previousUrl);
        });
    }
}
