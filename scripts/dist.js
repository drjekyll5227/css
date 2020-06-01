#!/usr/bin/env node
const execSync = require('child_process').execSync;

var readline = require('readline-sync');
var encoding = { encoding: 'utf-8' }
var color = '\x1b[36m%s\x1b[0m';

console.log(color, `
==================================================

CAVILHA UI 'dist' task running

--------------------------------------------------`)

var cleanFolder = readline.question('Clear `dist` folder? (y/n): ');

if (cleanFolder !== 'n') {
  execSync('npm run clean', encoding);
}

let files = ['light', 'dark'];

files.map(function(file, index){
  try {
    console.log(color, `${index + 1}/${files.length} Generating css/${file} files
  --------------------------------------------------`)
    execSync(`sass --no-source-map sass/${file}.sass:dist/themes/${file}.css`, encoding);
    execSync(`sass --no-source-map sass/${file}.sass:dist/themes/${file}.min.css --style compressed`, encoding);
    execSync(`postcss --use=autoprefixer --map false --output dist/themes/${file}.css dist/themes/${file}.css`, encoding);
    execSync(`postcss --use=autoprefixer --map false --output dist/themes/${file}.min.css dist/themes/${file}.min.css`, encoding);
  } catch (e) {
    //
  }
})

var cleanFolder = readline.question("Do you want to publish to npm? (y/n): ");
