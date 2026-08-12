import fs from "node:fs";
import ts from "typescript";

const filePath = "./routes.js";

const program = ts.createProgram(
    [filePath],
    { allowJs: true }
);

const sourceFile = program.getSourceFile(filePath);

const statement = sourceFile.statements[1];

console.log("pos:", statement.pos);
console.log("end:", statement.end);

console.log("getStart:", statement.getStart(sourceFile));
console.log("getFullStart:", statement.getFullStart());

console.log(
    JSON.stringify(
        sourceFile.text.slice(statement.pos, statement.getStart(sourceFile))
    )
);