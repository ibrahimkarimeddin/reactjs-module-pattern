

function initModuleConfig() {
    const config = {
        "folders": ["apis", "enums", "types", "components","pages","states","hooks","utils","design-system","hooks", "styles"],
        "base_folder_name": "Module",
        "git_keep": true,
        "inside_src": true,
        "custom_templates": {
            "components": "Button.js",
            "apis" :"helpers/useAxios.js"

        }
    };

    const configFilePath = path.join(process.cwd(), 'react-module.config.json');
    fs.writeJsonSync(configFilePath, config, { spaces: 2 });
    console.log(`Configuration file created at ${configFilePath}`);
}

module.exports = { initModuleConfig };
