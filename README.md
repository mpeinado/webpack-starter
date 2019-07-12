# Webpack
Bundler
Transpile (babel), tree shaking (removal of dead code). minification, asset management

## Setup 
Install webpack and webpack cli
    npm install -d webpack webpack-cli
    npm install -d http-server (I have it installed globally)
        https://www.npmjs.com/package/http-server
    npm install -d html-webpack-plugin html-loader
    npm install -d webpack-dev-server
    npm install -d @babel/core babel-loader @babel/preset-env
    npm install -d file-loader
    npm install -d style-loader css-loader scss-loader mini-css-extract-plugin
        sudo npm install -d --unsafe-perm node-sass
    np m install -d node-sass

Create build script
npm run build 
This script will create ./dist with main.js
    takes .src/index.js and transpiles it to ./dist/main.js

http-server -o

npm run start

## Nuggets Learned 
* code . - opens current directory with code 
* npm init -y 


## References 
https://webpack.js.org/

https://www.youtube.com/watch?v=TzdEpgONurw

https://stackoverflow.com/questions/46058546/error-eacces-permission-denied-access-usr-lib-node-modules