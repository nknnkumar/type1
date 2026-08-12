import fs from "node:fs";
import ts from "typescript";

const filePath = "./routes.js";

const program = ts.createProgram(
    [filePath],
    { allowJs: true }
);

const sourceFile = program.getSourceFile(filePath);

const newStatement = ts.factory.createExpressionStatement(
    ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier("console"),
            "log"
        ),
        undefined,
        [
            ts.factory.createStringLiteral("HELLO")
        ]
    )
);

const updatedSourceFile = ts.factory.updateSourceFile(
    sourceFile,
    ts.factory.createNodeArray([
        ...sourceFile.statements,
        newStatement
    ])
);

const printer = ts.createPrinter();

const result = printer.printFile(updatedSourceFile);

fs.writeFileSync(filePath, result);

console.log(result);