#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { createModule } = require('./src/utils/createModule');
const { initModuleConfig } = require('./src/utils/initModuleConfig');
const { COMMAND_MODULE_INIT_CONFIG, COMMAND_MODULE_CREATE_NAME } = require('./src/constant/module');

global.fs = fs;
global.path = path;
global.program = program;

program
    .command(COMMAND_MODULE_INIT_CONFIG)
    .description('Init module config')
    .action(() => {
        initModuleConfig();
    });

program
    .command(COMMAND_MODULE_CREATE_NAME + ' <moduleName>')
    .description('Create a new module')
    .action(async (moduleName) => {
     
        createModule(moduleName);
    });

program.parse(process.argv);
