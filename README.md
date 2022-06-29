# webpack5
Code snippets and notes on Webpack 5

Notes for Webpack 5, CLI commands and detailed explanation

1. Navigate to project folder
2. Run below command, to generate package.json
        npm init -y
3. Install webpack
        npm install webpack webpack-cli --save-dev
4. To run webpack. Normally we use webpack configuration file but webpack 4 & 5 uses default configuration, unless user provides a custom one.
        npx webpack
   Above command generates a directory `dist` that contains main.js file which is bundle of JS code
   To view webpack build process in detail, we can use below command
        npx webpack --stats detailed 
5. Webpack chooses `webpack.config.js` by default to store configuration information in a file, name can be customized. 