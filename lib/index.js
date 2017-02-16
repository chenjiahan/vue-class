import * as Vue from 'vue';
import ClassDecorator, { createDecorator } from 'vue-class-component';
var Component = function (options) {
    return function (component) {
        component = ClassDecorator(options)(component);
        if (typeof options.template === 'function') {
            component = options.template(component);
        }
        if (options.name) {
            Object.defineProperty(component, 'name', {
                value: options.name
            });
        }
        return component;
    };
};
var Watch = function (path, watchOptions) {
    if (watchOptions === void 0) { watchOptions = {}; }
    var deep = watchOptions.deep, immediate = watchOptions.immediate;
    return createDecorator(function (options, handler) {
        options.watch = options.watch || {};
        options.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
};
var Computed = createDecorator(function (options, key) {
    options.computed = options.computed || {};
    options.computed[key] = options.methods[key];
    delete options.methods[key];
});
export { Vue, Component, Watch, Computed };
