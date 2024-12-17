"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templatesConfig_1 = __importDefault(require("../config/templatesConfig"));
const express_handlebars_1 = require("express-handlebars");
const getTemplatesPath_1 = __importDefault(require("../utils/getTemplatesPath"));
class ViewsApp {
    registerApp(app) {
        const hbs = (0, express_handlebars_1.create)(templatesConfig_1.default);
        app.engine("hbs", hbs.engine);
        app.set("view engine", "hbs");
        app.set("views", (0, getTemplatesPath_1.default)().basePath);
        app.get("/", (req, res) => {
            res.render("home");
        });
    }
}
exports.default = ViewsApp;
