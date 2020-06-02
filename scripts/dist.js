#!/usr/bin/env node
const execSync = require('child_process').execSync;
var pjson = require('../package.json');

var readline = require('readline-sync');
var encoding = { encoding: 'utf-8' };
var color = '\x1b[36m%s\x1b[0m';
var distFolder = 'dist/';
var themes = ['light', 'dark'];

console.clear()

console.log(color, `
CAVILHA UI 'dist' task running
--------------------------------------------------
1/3 Cleaning ${distFolder} files`)

execSync(`rimraf ${distFolder.replace('/', '')}`, encoding)

themes.map(function(theme, index){
  try {

    var inputFile = `sass/${theme}.sass`
    var outputFile = `${distFolder}themes/${theme}.css`;
    var outputMinFile = `${distFolder}themes/${theme}.min.css`;
    var files = [outputFile, outputMinFile]

    console.log(color, `${(index + 1)+ 1}/3 Generating ${outputFile} file
    --------------------------------------------------`)

    // generate dist
    execSync(`node-sass --output-style expanded ${inputFile} ${outputFile}`, encoding)
    execSync(`node-sass --output-style compressed ${inputFile} ${outputMinFile}`, encoding)

    // prefix
    execSync(`postcss --use=autoprefixer --map false --output ${outputFile} ${outputFile}`, encoding);
    execSync(`postcss --use=autoprefixer --map false --output ${outputMinFile} ${outputMinFile}`, encoding);

    // clean
    execSync(`cleancss -o ${outputMinFile} ${outputMinFile}`, encoding);

    execSync(`rimraf ${outputFile}.map`, encoding);
    execSync(`rimraf ${outputMinFile}.map`, encoding);

    files.map(function(file){
      var fs = require('fs')
      fs.readFile(file, 'utf8', function (err,data) {
        var result = data.replace(/<version>/g, `v${pjson.version}`);
        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      });
    })

  } catch (e) {
    console.error(e);
  }
})

// var cleanFolder = readline.question("Do you want to publish to npm? (y/n): ");



