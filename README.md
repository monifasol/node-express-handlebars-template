# Node.js, Express.js, Handlebars

## Description

Simple boilerplate to start a project in:
- Node.js as ...
- Express.js as ...
- and Handlebars as a views engine.  

Valid for a simple, static, no database website. 


## How to use it

- Fork this repo  
- Clone yoru forked repo into your local directory
- Go to the repo in your local directory
```npm install```
```npm start```
- Open localhost:3001 in the browser  

You should see this:

![boilerplate is ready](https://raw.githubusercontent.com/monifasol/node-express-handlebars-template/master/public/images/boilerplate-ready.png)


## Development Mode, SASS and livereload

- This boilerplate uses sass as a preprocessor
- The SCSS files you want to edit are in ./scss folder
- ```npm run sass``` to compile your scss into css (final styles compiled in public/css) and watch for any change in the scss files
- ```npm run watch``` changes for any changes using nodemon. It excludes the public folder since this one is handled by livereload.
- For development mode, run ```npm run dev``` which runs ```npm run sass & npm run watch```
This will start the application and WATCH for any change. In case a scss file changes, it will automatically compile the change into CSS, save it in public/css, and 
reload the browser using livereload. 
- For livereload configuration, check .middleware/livereload.js

