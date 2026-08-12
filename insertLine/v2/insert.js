import fs from "node:fs";
import ts from "typescript";

const filePath = "./routes.js";

const program = ts.createProgram(
    [filePath],
    { allowJs: true }
);

const sourceFile = program.getSourceFile(filePath);
const source = sourceFile.text;

const insertPosition = 64;

const newSource =
    source.slice(0, insertPosition) +
    'console.log("HELLO");\n' +
    source.slice(insertPosition);

fs.writeFileSync(filePath, newSource);

console.log(newSource);