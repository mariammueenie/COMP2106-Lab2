# COMP2106 Lab 2

## Lab 2 Output

![Lab 2 screenshot](screenshots/lab2-output.png)

## Terminal Commands to Use

`npm init -y` - initializes npm & creates package.json w/default values

`npm i typescript @types/node --save-dev` - dependencies for TS dev

`tsc` - transpile ts => js

`node dist/${file-name}` - execute specified js file in dist folder 

`npm i accounting` - package for money format 

`npm i nodemon -g` - global package for auto-restarts on save change

`npm run dev` - run dev script in package.json (runs tsc then nodemon to run dist/tax.js)