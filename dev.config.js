import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';

export const mode = 'development';
export const entry = {
    main: './src/main.js',
};
export const devtool = 'inline-source-map';
export const output = {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
};
export const optimization = {};
export const plugins = [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    }),
    new DashboardPlugin(),
];
export const module = {
    rules: [{
        test: /\.html$/i,
        use: ['html-loader'],
    },
    {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    ],
};
