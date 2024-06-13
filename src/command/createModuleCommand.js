const { COMMAND_MODULE_CREATE_NAME } = require("../constant/module");




function createModuleCommand(action) {
    program
        .command(COMMAND_MODULE_CREATE_NAME +' <moduleName>')
        .description('Create a new module')
        .action((moduleName) => {
            action(moduleName);
        });

    program.parse(process.argv);

}

module.exports = {createModuleCommand};