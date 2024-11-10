import { ConfigOptions } from "express-handlebars/types";
import templatesPath from "../utils/getTemplatesPath";
import __ from "../helpers/translates";

const templateConfig: ConfigOptions = {
    defaultLayout: "main",
    extname: ".hbs",
    encoding: "utf-8",
    layoutsDir: templatesPath().layoutPath,
    partialsDir: templatesPath().partialsPath,
    helpers: {
        __,
    },
};

export default templateConfig;
