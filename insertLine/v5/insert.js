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

const statement = sourceFile.statements[1];

const insertPosition1 = statement.getFullStart();
const insertPosition = statement.getStart(sourceFile);

const result =
    sourceFile.text.slice(0, insertPosition) +
    'console.log("HELLO");\n\n' +
    sourceFile.text.slice(insertPosition);

fs.writeFileSync(filePath, result);