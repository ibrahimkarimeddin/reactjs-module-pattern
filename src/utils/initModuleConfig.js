
const promptly = require('promptly');
const { initPrettier, initEslint } = require('./createDependencies');

 async function initModuleConfig() {

    
     const AddPrettier =  (await promptly.choose('? Would you like to add Prettier for code formatting? (yes/no)' , ['yes', 'YES'  , 'no' , 'NO' ])).toLowerCase() === 'yes';
     const AddEslint =  (await promptly.choose('? Would you like to add ESLint for code linting? (yes/no) ' , ['yes', 'YES'  , 'no' , 'NO' ])).toLowerCase() === 'yes';

     let PackageManager = null
     if(AddPrettier || AddEslint){
         
         PackageManager = await promptly.choose('Select your package manager [npm , yarn , pnpm]' , ['npm' ,'yarn' ,'pnpm']);

     }
     if(AddPrettier){
         console.log('Installing Prettier');
        initPrettier(PackageManager)
     }
     if(AddEslint){
         console.log('Installing Eslint');
         initEslint(PackageManager)
     }

    process.exit(1);
    console.log(name);

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
