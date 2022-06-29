modules.exports = {

    //entrypoint - webpack will start from this file when running the build process
    entry: './src/index.js',
    //ouput file & folder - name of the file that will be generated as result of the build process
    output: {
        filename: 'bundle.js',
        path: './dist'      
    },
    mode: 'none'


}
