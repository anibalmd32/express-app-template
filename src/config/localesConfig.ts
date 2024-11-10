import i18n from "i18n";
import getLocalesPath from "../utils/getLocalesPath";

i18n.configure({
    locales: ["en", "es"],
    directory: getLocalesPath(),
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

export default i18n;
