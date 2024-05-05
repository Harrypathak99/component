// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],

});
