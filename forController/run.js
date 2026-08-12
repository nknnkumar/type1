import fs from "node:fs";
import ts from "typescript";

const filePath = "./controller.js";

const program = ts.createProgram(
    [filePath],
    { allowJs: true }
);

const sourceFile = program.getSourceFile(filePath);

function astToJson(node) {
    const result = {
        kind: ts.SyntaxKind[node.kind],
        pos: node.pos,
        end: node.end
    };

    const children = [];

    ts.forEachChild(node, child => {
        children.push(astToJson(child));
    });

    if (children.length > 0) {
        result.children = children;
    }

    return result;
}

const tree = astToJson(sourceFile);

fs.writeFileSync(
    "./syntax-tree.json",
    JSON.stringify(tree, null, 2)
);

const content = sourceFile.text.slice(
    0,
    37
);

console.log(content);