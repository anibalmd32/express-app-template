"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const localesConfig_1 = __importDefault(require("../config/localesConfig"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function __(key, options) {
    const req = options.data.root._req;
    return req ? req.__(key) : localesConfig_1.default.__(key);
}
exports.default = __;
