
function createFolders(basePath, folders, gitKeep) {
    fs.ensureDirSync(basePath);

    folders.forEach(folder => {
        const folderPath = path.join(basePath, folder);
        fs.ensureDirSync(folderPath);

        if (gitKeep) {
            fs.writeFileSync(path.join(folderPath, '.gitkeep'), '');
        }
    });
}


module.exports = {createFolders}