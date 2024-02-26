import { addTwo } from "./modules"; 
// see like this, now we can use addTwo here, consider this a calculator program. 


result = addTwo(2, 4);
console.log(result);


/* Ok understand this will not run - we need to ensure that our JavaScript file 
             is recognized as a module. 
             There are few ways to this (not try here)
             -> Package.json Configuration: we can configure our project to 
             recognize .js files as ES modules by adding "type": "module" to our 
             package.json file. This tells Node.js to treat all .js files as ES modules.
             
             -> For working with Node.js and prefer to use CommonJS syntax 
             (require/exports), we should avoid using import/export statements altogether. 
             Stick to require/exports syntax.  (we will see later) */