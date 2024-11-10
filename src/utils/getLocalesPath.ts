import { resolve } from "node:path";

export default function getLocalesPath() {
    const result = resolve(process.cwd(), "public", "locales");
    return result;
}
