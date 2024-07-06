
function loadConfig() {
    const configPath = path.resolve(process.cwd(), 'react-module.config.json');
    let defaultConfig = {
        folders: [
            "apis", 
            "enums", 
            "types", 
            "components",
            "pages",
            "states",
            "hooks",
            "utils",
            "design-system",
            "hooks", 
            "styles"
           ],
        baseFolderName: 'Module',
        gitKeep: true , 
        custom_templates :{}
        
    };

    if (fs.existsSync(configPath)) {
     
        const userConfig = fs.readJsonSync(configPath);
        return { ...defaultConfig, ...userConfig };
    }
    console.error("Please Run `npx module init` then create module ")
    process.exit(1);

    return defaultConfig;
}


module.exports = {loadConfig}