/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');

const resultado = shell.exec('git diff --name-only', { silent: true });

console.log(resultado.stdout.split('\n'));
