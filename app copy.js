import ts from "typescript";

const filePath = "./script.js";

const program = ts.createProgram(
    [filePath],
    {
        allowJs: true
    }
);

const sourceFile = program.getSourceFile(filePath);

if (sourceFile) {

    ts.forEachChild(sourceFile, node => {

        console.log(
            "Kind:",
            ts.SyntaxKind[node.kind]
        );

        console.log(
            "Text:",
            node.getText(sourceFile)
        );

        console.log("----------------");
    });

}