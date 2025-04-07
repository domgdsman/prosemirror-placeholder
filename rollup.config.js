import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const external = [...Object.keys(pkg.peerDependencies || {})];

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.esm.js", format: "esm", sourcemap: true },
      { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
    ],
    external, // prevent bundling peer deps
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "es" },
    plugins: [dts()],
  },
];
