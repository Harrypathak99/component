import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
};
export const output = {
    filename: "[name].[contentHash].bundle.js",
    path: resolve(__dirname, "dist")
};
export const module = {
    rules: [
        {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
            test: /\.(svg|jpg|png|gif)$/,
            use: "file-loader"
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", //3 Inject styles into DOM
                "css-loader", //2 Turns css into common.js
                "sass-loader" //1 Turns sass into css
            ]
        },
    ],
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
];