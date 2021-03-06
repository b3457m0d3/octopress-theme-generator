#!/usr/bin/env node
console.log("fight!");
var fs = require("fs");
var prompt = require('minimal-prompt');

prompt.question(['Theme Name'], {
    prompt: '>',
    delimiter: ':',
    formatPrompt: function(prompt, delim, name) {
        // Note: this is the default prompt for the question option.
        return prompt + delim + ' ' + name + delim + ' ';
    },
    onComplete: function(results) {
        var name = results.themeName;
        fs.mkdir('./'+name,0755,function(err){
           if (err) return console.error(err);
           console.log('Folder "'+name+'" created successfully');
           prompt.question(['Theme Name'], {
               prompt: '>',
               delimiter: ':',
               formatPrompt: function(prompt, delim, name) {
                   // Note: this is the default prompt for the question option.
                   return prompt + delim + ' ' + name + delim + ' ';
               },
               onComplete: function(results) {
                   var name = results.themeName;
                   fs.mkdir('./'+name,0755,function(err){
                      if (err) return console.error(err);
                      console.log('Folder "'+name+'" created successfully');
                   });
               }
           });

           // prompt.start() will begin the prompting process.
           prompt.start();
        });
    }
});

// prompt.start() will begin the prompting process.
prompt.start();
