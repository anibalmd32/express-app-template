import { resolve } from "path";

export default function templatesPath() {
    const basePath = resolve(process.cwd(), "src", "views");
    const layoutPath = resolve(basePath, "layouts");
    const partialsPath = resolve(basePath, "partials");

    return { basePath, layoutPath, partialsPath };
}
