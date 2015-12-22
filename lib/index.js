var path = require('path');

var createPattern = function (path) {
	return {
		pattern: path,
		included: true,
		served: true,
		watched: false
	};
};

var initFuncunit = function (files) {
	var funcunitPath = path.dirname(require.resolve('funcunit'));
	var qunitPath = path.dirname(require.resolve('qunitjs'));
	files.unshift(createPattern(__dirname + '/adapter.js'));
	files.unshift(createPattern(qunitPath + '/qunit/qunit.js'));
	files.unshift(createPattern(funcunitPath + '/node_modules/jquery/dist/jquery.js'));
	files.unshift(createPattern(funcunitPath + 'funcunit.js'));
};

initFuncunit.$inject = ['config.files'];

module.exports = {
	'framework:funcunit': ['factory', initFuncunit]
};