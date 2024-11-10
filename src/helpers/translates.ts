import localesConfig from "../config/localesConfig";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function __(this: unknown, key: string, options: any) {
    const req = options.data.root._req;
    return req ? req.__(key) : localesConfig.__(key);
}
export default __;
