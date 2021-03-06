const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: '@material-ui', style: 'css' }], config);
    config = rewireLess(config, env);
    return config;
};
