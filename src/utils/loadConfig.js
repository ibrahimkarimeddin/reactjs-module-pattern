
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
        gitKeep: true
        
    };

    if (fs.existsSync(configPath)) {
        const userConfig = fs.readJsonSync(configPath);
        console.log(userConfig);
        return { ...defaultConfig, ...userConfig };
    }

    return defaultConfig;
}


module.exports = {loadConfig}