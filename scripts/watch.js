#!/usr/bin/env node

const execSync = require('child_process').execSync;

execSync('clear', encoding);

var readline = require('readline-sync');
var encoding = { encoding: 'utf-8' };
var color = '\x1b[36m%s\x1b[0m';
let themes = ['light', 'dark'];

console.log(color, `
==================================================

CAVILHA UI 'watch' task running

--------------------------------------------------`)

let index = readline.keyInSelect(themes, 'Which theme?');
const theme = themes[index];

execSync('npm run clean', encoding);
console.log(color, `1/4 Cleaning dev folder
--------------------------------------------------`)
console.log(color, `2/4 Generating dev/cavilha-ui.css
--------------------------------------------------`)
execSync(`sass sass/${theme}.sass:dev/cavilha-ui.css`, encoding);
console.log(color, `3/4 Prefixing dev/cavilha-ui.css
--------------------------------------------------`)
execSync(`postcss --use=autoprefixer --map false --output dev/cavilha-ui.css dev/cavilha-ui.css`, encoding);
console.log(color, `4/4 Watching sass/${theme}.sass

Press CMD + C or Ctrl + C to cancel this process.
==================================================`)
console.log(execSync(`sass --watch sass/${theme}.sass:dev/cavilha-ui.css`, encoding));
