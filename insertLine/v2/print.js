import fs from "node:fs";
import ts from "typescript";

const filePath = "./routes.js";

const program = ts.createProgram(
    [filePath],
    { allowJs: true }
);

const sourceFile = program.getSourceFile(filePath);

const text = sourceFile.text.slice(
    0,
    30
);

console.log(text);

const text1 = sourceFile.text.slice(
    30,
    64
);

console.log(text1);