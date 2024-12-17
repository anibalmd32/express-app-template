"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = __importDefault(require("i18n"));
const getLocalesPath_1 = __importDefault(require("../utils/getLocalesPath"));
i18n_1.default.configure({
    locales: ["en", "es"],
    directory: (0, getLocalesPath_1.default)(),
    cookie: "lang",
    autoReload: true,
    objectNotation: true,
    syncFiles: true,
    defaultLocale: "es",
    retryInDefaultLocale: true,
    header: "accept-language",
    queryParameter: "lang",
    directoryPermissions: "755",
    updateFiles: false,
    extension: ".json",
    logWarnFn: function (msg) {
        console.log("warn", msg);
    },
    logErrorFn: function (msg) {
        console.log("error", msg);
    },
    missingKeyFn: function (locale, value) {
        return value;
    },
    register: global,
    parser: JSON,
});
exports.default = i18n_1.default;
