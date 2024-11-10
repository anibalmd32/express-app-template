import plugin from "tailwindcss/plugin";
import buttons from "./buttons.mjs";
import fonts from "./fonts.mjs";

export default plugin(function({ addComponents }) {
    addComponents({
        ...buttons,
        ...fonts,
    });
});
