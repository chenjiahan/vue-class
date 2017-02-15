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
var Watch = function (path, options) {
    if (options === void 0) { options = {}; }
    var deep = options.deep, immediate = options.immediate;
    return createDecorator(function (componentOptions, handler) {
        componentOptions.watch = componentOptions.watch || {};
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
};
export { Vue, Component, Watch };
