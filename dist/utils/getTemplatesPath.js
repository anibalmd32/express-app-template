"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = templatesPath;
const path_1 = require("path");
function templatesPath() {
    const basePath = (0, path_1.resolve)(process.cwd(), "src", "views");
    const layoutPath = (0, path_1.resolve)(basePath, "layouts");
    const partialsPath = (0, path_1.resolve)(basePath, "partials");
    return { basePath, layoutPath, partialsPath };
}
