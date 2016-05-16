#!/usr/bin/env node
console.log("fight!");
var fs = require("fs");
var prompt = require('minimal-prompt');

prompt.question(['Theme Name', 'Theme Repo'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
        // Note: this is the default prompt for the question option.
        return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
        console.log('Theme name:', results.themeName);
        console.log('Theme repo:', results.themeRepo);
    }
});

// prompt.start() will begin the prompting process.
prompt.start();
