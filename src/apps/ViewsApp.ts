import express from "express";
import templateConfig from "../config/templatesConfig";
import { create } from "express-handlebars";
import templatesPath from "../utils/getTemplatesPath";

export default class ViewsApp {
    public registerApp(app: express.Application) {
        const hbs = create(templateConfig);

        app.engine("hbs", hbs.engine);
        app.set("view engine", "hbs");
        app.set("views", templatesPath().basePath);

        app.get("/", (req, res) => {
            res.render("home");
        });
    }
}
