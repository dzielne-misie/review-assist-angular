exports.config = {
	specs: [
		"./test/e2e/**/*.js"
	],
	baseUrl: "http://localhost:8000",
	capabilities: {
		browserName: "phantomjs",
		"phantomjs.binary.path": "./node_modules/phantomjs/bin/phantomjs"
	}
};
