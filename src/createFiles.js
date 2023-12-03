const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function filterAndCopyFiles(sourceDir, targetDir, fileExtensions) {
    try {
    const files = await readdir(sourceDir);
    files.forEach(async (file) => {
        const extname = path.extname(file);
        if (fileExtensions.includes(extname)) {
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);
        await copyFile(sourceFilePath, targetFilePath);
        console.log(`Copied: ${file}`);
        }
    });
    // Display a successful message, if the files copied without any error.
    console.log('Files copied successfully!');

    // Display a error message, if there is an error occur while transfer the files.
    } catch (error) {
        console.error('Error:', error);
    }
}

const [, , sourceDir, targetDir, ...fileExtensions] = process.argv;
filterAndCopyFiles(sourceDir, targetDir, fileExtensions);
