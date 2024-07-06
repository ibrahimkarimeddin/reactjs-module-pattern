const { createFolders } = require("./createFolder");
const { loadConfig } = require("./loadConfig");


function createModule(moduleName) {
    const config = loadConfig();
  
      


    // process.exit(1)
    const baseFolderPath = path.resolve(process.cwd(),config.inside_src ?  "src" : '',  config.baseFolderName);
    const modulePath = path.join(baseFolderPath, moduleName);
    createFolders(modulePath, config.folders, config.git_keep, config.custom_templates, moduleName);

    console.log(`Module ${moduleName} has been created inside ${config.baseFolderName} folder.`);
}

module.exports= {createModule}