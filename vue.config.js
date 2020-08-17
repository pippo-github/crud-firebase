const path = require('path')

module.exports = {
	publicPath:   './',
 	outputDir: path.resolve(__dirname, './crud_firebase_vue'),
    lintOnSave: false,
    devServer: {
        host: 'localhost'
      } 	
}