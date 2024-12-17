"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTemplatesPath_1 = __importDefault(require("../utils/getTemplatesPath"));
const translates_1 = __importDefault(require("../helpers/translates"));
const templateConfig = {
    defaultLayout: "main",
    extname: ".hbs",
    encoding: "utf-8",
    layoutsDir: (0, getTemplatesPath_1.default)().layoutPath,
    partialsDir: (0, getTemplatesPath_1.default)().partialsPath,
    helpers: {
        __: translates_1.default,
    },
};
exports.default = templateConfig;
