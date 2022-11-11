const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve:{
            fallback: { 
                "path": require.resolve("path-browserify") ,
                "fs": false,
            },
        }   
    },
  },
};