const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { createModuleCommand } = require('./src/command/createModuleCommand');
const { createModule } = require('./src/utils/createModule');


global.fs = fs;
global.path = path;
global.program = program; 



createModuleCommand(createModule)