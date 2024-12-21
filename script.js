// const fs = require('fs');
// const path = require('path');

// function traverseConcepts(baseFolder) {
//     const concepts = {};

//     try {
//         const folders = fs.readdirSync(baseFolder);

//         folders.forEach(folder => {
//             const folderPath = path.join(baseFolder, folder);

//             if (fs.statSync(folderPath).isDirectory()) {
//                 const files = fs.readdirSync(folderPath).map(file => path.join(folderPath, file));

//                 concepts[folder] = files.filter(file => 
//                     file.endsWith('introduction.md') || file.endsWith('about.md'));
//             }
//         });

//         return concepts;
//     } catch (error) {
//         console.error("Error while traversing the concepts folder:", error);
//         return {};
//     }
// }

// function formatOutput(concepts) {
//     let output = '';

//     for (const [concept, files] of Object.entries(concepts)) {
//         const filePaths = files.map(file => path.relative('.', file)).join(',');
//         output += `${concept}::${filePaths}\n`;
//     }

//     return output;
// }

// // Main
// const conceptsFolder = path.join(__dirname, 'concepts');
// const concepts = traverseConcepts(conceptsFolder);
// const output = formatOutput(concepts);

// console.log(output);

const fs = require('fs');
const path = require('path');

// Function to read and combine files based on a mapping in concepts.md
function combineConceptFiles(conceptsFilePath, outputFilePath) {
    try {
        const conceptsFileContent = fs.readFileSync(conceptsFilePath, 'utf-8');
        const lines = conceptsFileContent.split('\n').filter(line => line.trim() !== '');

        let combinedContent = '';
        let indexContent = '# Index\n\n';

        lines.forEach((line, index) => {
            const [concept, files] = line.split('::');
            if (files) {
                const fileList = files.split(',');

                const sectionHeader = `# ${index + 1}. ${concept.toUpperCase()}`;
                combinedContent += `${sectionHeader}\n---\n---\n`;

                indexContent += `- [${concept.toUpperCase()}](#${index + 1}-${concept.toLowerCase().replace(/\s+/g, '-')})\n`;

                fileList.forEach(filePath => {
                    if (fs.existsSync(filePath)) {
                        const fileContent = fs.readFileSync(filePath, 'utf-8');
                        combinedContent += `${fileContent}\n\n`;
                    } else {
                        console.warn(`File not found: ${filePath}`);
                    }
                });

                combinedContent += `---\n\n`; // Add a Markdown divider
            }
        });

        const finalContent = `${indexContent}\n\n${combinedContent}`;
        fs.writeFileSync(outputFilePath, finalContent);
        console.log(`Combined Markdown file created at: ${outputFilePath}`);
    } catch (error) {
        console.error('Error while combining files:', error);
    }
}

// Main
const conceptsFile = path.join(__dirname, 'concepts.md');
const outputMarkdownFile = path.join(__dirname, 'combined_concepts.md');
combineConceptFiles(conceptsFile, outputMarkdownFile);
