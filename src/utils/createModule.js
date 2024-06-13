const { createFolders } = require("./createFolder");
const { loadConfig } = require("./loadConfig");

function createModule(moduleName) {
    const config = loadConfig();
    
    const baseFolderPath = path.resolve(process.cwd(),config.inside_src ?  "src" : '',  config.baseFolderName);
    const modulePath = path.join(baseFolderPath, moduleName);
    createFolders(modulePath, config.folders, config.gitKeep);

    console.log(`Module ${moduleName} has been created inside ${config.baseFolderName} folder.`);
}

module.exports= {createModule}