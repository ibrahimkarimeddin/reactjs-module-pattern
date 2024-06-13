const path = require('path');
const fs = require('fs-extra');



function createFolders(basePath, folders, gitKeep, customTemplates ={}) {
    fs.ensureDirSync(basePath);

    folders.forEach(folder => {
        const folderPath = path.join(basePath, folder);
        fs.ensureDirSync(folderPath);

        if (gitKeep) {
            fs.writeFileSync(path.join(folderPath, '.gitkeep'), '');
        }
    });

    for (const template in customTemplates) {
        const templatePath = path.join(basePath, template);

        fs.ensureDirSync(templatePath);
        if (gitKeep) {
            fs.writeFileSync(path.join(templatePath, '.gitkeep'), '');
        }


        const  templatePathFile = (customTemplates[template])

        if (templatePathFile.includes('/')) {
            const parts = templatePathFile.split('/');
            let currentPath = path.join(basePath , template);
            const lastPart = parts.pop()
            console.log(currentPath);
            parts.forEach(part => {
                currentPath = path.join(currentPath, part);
                if (!fs.existsSync(currentPath)) {
                    fs.mkdirSync(currentPath);
                    if (gitKeep) {
                        fs.writeFileSync(path.join(currentPath, '.gitkeep'), '');
                    }
                }
            });
            fs.writeFileSync(path.join(currentPath, lastPart), '');

        }else {
             const fileTemplate = path.join(templatePath, customTemplates[template]);
            fs.writeFileSync(fileTemplate, "")
        }
       
      }
}

module.exports = { createFolders };
