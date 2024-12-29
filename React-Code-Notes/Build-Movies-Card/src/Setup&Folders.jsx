/*
 USING VITE AND NPM: 
 ** Make sure of Node.js is installed

1. Go the directory we want to create react project using "cd" command and 
   then do this - npm create vite@latest projectName 

2. Select react from frameworks options then choose javascript from variant options 
** Upto this the react basic boilerplate has been created 

3. Go to that directory and do this . code , this will open up vs code 

4. Change the port from vite.config file which by default is 5173 to whatever we 
   like (3000 say) by adding a server object like this 
   server: {  
      port: 3000,
     },      
within the pulgins object in defineConfig 

5. Then install node modules by this npm install

6. Now in package.json there is a dev script so to start the dev server 
   we do this - npm run dev 
** Thats it now we can start working with our new react project and to 
   get back to it don't forget to start the dev server with same command 
   used in step 6.

7. Installing Tailwind (delete App.css, keep index.css) - 

i - search google for vite react tailwind, open up the first link where we should 
    get terminal commands to install tailwind  

ii - open new terminal in vs code, copy tailwind autoprefixer command and paste enter 
     after this copy intiallize tailwind command and paste enter
    ** Now we should see tailwind.config file and postcss.config file in our 
       project structure  

iii - Then clear all inside tailwind.config and replace with config codes given 
      in the website, copy paste. That file would basically just watch .js, .jsx, 
      .ts etc files. Then we need to add couple of things in extend object under 
      theme object according to requirements  like 
      extend: {
          fontFamily: {
            sans: ['Roboto', 'sans-serif']
              },
           gridTemplateColumns: {
              '70/30': '70% 28%'   // leaves room to add  class
          },
      }, 

iv - Then we need to go to index.css and add copied 3 tailwind direactives to css 

v - Add vs code extension PostCSS Language Support for avoiding syntax errors 
*/

/* USING BUN THROUGH NPM + v19: 

1. Install Bun Globally - npm i -g bun
2. bun create vite   then give project name
                     select framework with variant   the change cd to the proejct 
3. Then do 'bun insatll' to install node modules 
4. bun dev to run project on local host 

v19 (As of June 2024, v19 has not been officailly released yet so 
    we modify package.json for RC version)

1. Delete current react version dependencies, open new terminal 
2. do this 'bun install react@rc'
3. Also 'bun install react-dom@rc'

*/



/*
FOLDER STRUCTURES:
--> node_modules- This folder is needed to be installed while working on any project 
    using node.js which basically includes necessary libraries, dependencies necessary
    to run and work on projetc and we can just ignore this folder. 

--> public - This folder should contain satic files like images, videos, fonts etc. 

--> src - This contains our main source files like jsx, css etc. 
   Within it we have 
   App.jsx & main.jsx- Whatever we write here is imported to main.jsx and passed
   to it as a component. In main.jsx we also have used getElementById which brings
   div from index.html and finally being rendered. Note that main.jsx is the entry 
   point. 

--> package.json - This file is most important as it contains the details or 
    configurations regarding project 
 */

/*
Naming Conventions 
camelCase - variables, functions, methods, properties inside object, file names 
PascalCase - used for component names, class names, types etc.
*/