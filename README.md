# ReactJS Modules Pattern

This library helps you to create a standardized module structure in your React projects with customizable folder names and settings.

## Installation

To install the library, run the following command:

```sh
npm i reactjs-modules-pattern
```



### Usage


To init owing module config  run command:
```sh
npx module init 
```

this will create a configuration in root folder named `react-module.config.json`

To create a new module, use the following command:
```sh
npx module create <MODULE_NAME>
```

Replace <MODULE_NAME> with the name of the module you want to create.


Example
```sh
npx module create MyNewModule
```
This will create a new module named MyNewModule inside the base folder defined in your configuration file (or Module by default).


## Configuration

You can customize the module creation process by providing a `react-module.config.json` file in the root of your project. The configuration file supports the following options:

- `folders`: An array of folder names to create inside each module.
- `base_folder_name`: The name of the base folder where modules will be created.
- `git_keep`: A boolean indicating whether to create a `.gitkeep` file inside each folder.
- `inside_src`: A boolean indicating whether to place the base folder inside the `src` directory.
- `custom_templates` : A object containing the file templates to  create inside directories .




### Example Configuration

To customize the settings, create a file named `react-module.config.json` in the root directory of your project with the following content:

```json
{
    "folders":  ["apis", "enums", "types", "components","pages","states","hooks","utils","design-system","hooks", "styles"],
    "base_folder_name": "Module",
    "git_keep": true,
    "inside_src": true,
    "custom_templates":{
        "components": "Button.js",
        "apis" :"helpers/useAxios.js"
     }
}
```