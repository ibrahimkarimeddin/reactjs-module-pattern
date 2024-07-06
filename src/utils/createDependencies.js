const { exec, execSync } = require('child_process');


async function installPrettier(packageManager) {
   

    const command = `${packageManager} install prettier --save-dev`;

     execSync(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error during installation: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
        }
    });
}
function installEslint(PackageManager) {
    const command = `${PackageManager} install eslint --save-dev`;
    
    execSync(command, (error, stdout, stderr) => {
       if (error) {
           console.error(`Error during installation: ${error.message}`);
           return;
       }
       if (stderr) {
           console.error(`Stderr: ${stderr}`);
       }
   });
}

function initEslint(PackageManager){
    installEslint(PackageManager);
    const configPath = path.resolve(process.cwd(), '.eslintrc.json');
    if (fs.existsSync(configPath)) {
        return;
    }
    const eslintConfig = {
        env: {
            browser: true,
            es2021: true
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended'
        ],
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            },
            ecmaVersion: 12,
            sourceType: 'module'
        },
        plugins: [
            'react'
        ],
        rules: {}
    };

    fs.writeFileSync(configPath, JSON.stringify(eslintConfig, null, 2));
}

function initPrettier(PackageManager){
    installPrettier(PackageManager)
    const configPath = path.resolve(process.cwd(), '.prettierrc');
    if (fs.existsSync(configPath)) {
        return;
    }
    const prettierConfig = {
        singleQuote: true,
        semi: false,
        tabWidth: 4
    };
    fs.writeFileSync(configPath, JSON.stringify(prettierConfig, null, 2));
}

module.exports ={installEslint , installPrettier , initEslint , initPrettier}