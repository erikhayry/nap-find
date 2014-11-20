var _requirerer = function(){
    var _this = this,  
        _modules = {},
        _requires = {};

    return {
        require: function(root, moduleArr){
            moduleArr.forEach(function(module){
                var _name = (module.indexOf("/") > -1) ? module.substr(module.lastIndexOf("/") + 1) : module;
                _modules[_name] = root + module;
                _requires[_name] = require(root + module);
            });
            return _requires;
        },
        restore: function(){
            for(var url in _modules){
                delete require.cache[require.resolve(_modules[url])];
            }
            _modules = {};
            _requires = {};
        }
    };
};

module.exports = {
	requirerer: _requirerer()
};