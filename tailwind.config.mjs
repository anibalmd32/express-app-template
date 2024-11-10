import formsPlugin from "@tailwindcss/forms";
import components from "./components/_components.mjs";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./src/**/*.{html,js,hbs,handlebars}",
        "./public/**/*.{html,js,hbs,handlebars}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        formsPlugin,
        components,
    ],
};
