// https://reactjs.org/docs/optimizing-performance.html#rollup

import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // support npm commonjs packages
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // fetch peerDependecies

import postcss from "rollup-plugin-postcss"; // add css preprocessors support

//import image from '@rollup/plugin-image'; // for images files

import typescript from "@rollup/plugin-typescript"; // typescript
import dts from "rollup-plugin-dts"; // For generated d.ts defenition files
import { terser } from "rollup-plugin-terser"; // For code optimization or if es4 use uglify

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve({
                extensions: [".tsx", ".ts", ".json"]
            }),
            commonjs({
                include: 'node_modules/**'
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                modules: true,
                minimize: true,
                use: ['sass']
            }),
            //image(),
            terser()
        ]
    },

    // This step will generate defenition file
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    }
];