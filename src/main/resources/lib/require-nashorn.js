// NOTE The loadModule parameter points to the function, which prepares the
//      environment for each module and runs its code. Scroll down to the end of
//      the file to see the function definition.
(function(loadModule) { 'use strict';

// INFO Java objects
    var Paths = Java.type("java.nio.file.Paths");
    var Files = Java.type("java.nio.file.Files");
    var StandardCharsets = Java.type("java.nio.charset.StandardCharsets");
    var Collectors = Java.type("java.util.stream.Collectors");


// INFO Current module descriptors
//      pwd[0] contains the descriptor of the currently loaded module,
//      pwd[1] contains the descriptor its parent module and so on.

    var pwd = Array();

// INFO Module cache
//      Contains getter functions for the exports objects of all the loaded
//      modules. The getter for the module 'mymod' is name '$name' to prevent
//      collisions with predefined object properties (see note below).
//      As long as a module has not been loaded the getter is either undefined
//      or contains the module code as a function (in case the module has been
//      pre-loaded in a bundle).

    var cache = new Object();

// INFO Module getter
//      Takes a module identifier, resolves it and gets the module code via
//      Java NIO API. If this was successful the code and
//      some environment variables are passed to the load function. The return
//      value is the module's `exports` object. If the cache already
//      contains an object for the module id, this object is returned directly.

    function require(identifier) {

        var descriptor = resolve(identifier);
        var cacheid = '$'+descriptor.id;
        if (cache[cacheid]) {
            return cache[cacheid];
        }

        var content = Files.lines(descriptor.path, StandardCharsets.UTF_8)
            .collect(Collectors.joining("\n"));
        loadModule(descriptor, cache, pwd, content);
        return cache[cacheid];

    }

// INFO Module resolver
//      Takes a module identifier and resolves it to a module id and path. Both
//      values are returned as a module descriptor, which can be passed to
//      `fetch` to load a module.


    function resolve(identifier) {

        var basePath = Paths.get(require.basePath);
        var parentPath = basePath;
        if (pwd.length > 0) {
            parentPath = pwd[0].path.getParent();
        }
        var scriptPath = parentPath.resolve(identifier + ".js").normalize();

        // build id corresponding to script
        var subpath = scriptPath.subpath(basePath.getNameCount(), scriptPath.getNameCount());
        var id = subpath.toString();

        return {'id': id, 'path': scriptPath};
    }


// INFO Exporting require to global scope
    global.require = require;

})(

// INFO Module loader
//      Takes the module descriptor, the global variables and the module code,
//      sets up the module environment, defines the module getter in the cache
//      and evaluates the module code.

    function (module) {
        var exports = new Object();
        Object.defineProperty(module, 'exports', {'get':function(){return exports;},'set':function(e){exports=e;}});
        arguments[2].unshift(module);
        Object.defineProperty(arguments[1], '$'+module.id, {'get':function(){return exports;}});
        try {
            eval(arguments[3]);
        } catch (e) {
            print("*** eval ERROR " + module.path + " : " + e.message);
        }

        arguments[2].shift();
    }

);