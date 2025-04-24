const fs = require('fs');
const doc = JSON.parse(fs.readFileSync('doc_ast.json'));

function validateModule(doc) {
    if (!doc.find(item => item.kind === 'module')) {
        throw new Error('Module documentation missing');
    }

    const functions = doc.filter(item => item.kind === 'function');
    functions.forEach(func => {
        if (!func.description) {
            console.warn(`Function ${func.name} missing description`);
        }
    });
}

validateModule(doc);
console.log('Documentation validation passed!');