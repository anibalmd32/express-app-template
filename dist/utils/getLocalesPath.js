"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getLocalesPath;
const node_path_1 = require("node:path");
function getLocalesPath() {
    const result = (0, node_path_1.resolve)(process.cwd(), "public", "locales");
    return result;
}
