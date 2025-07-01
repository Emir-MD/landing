// postcss.config.js  (raíz del proyecto)
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss(),   // ← nuevo conector
    autoprefixer(),  // sigue igual
  ],
};
