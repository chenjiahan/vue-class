"use strict";
var Vue = require("vue");
exports.Vue = Vue;
var vue_class_component_1 = require("vue-class-component");
var Component = function (options) {
    return function (component) {
        if (typeof options.render === 'object') {
            var obj = options.render;
            options.render = obj.render;
            options.staticRenderFns = obj.staticRenderFns;
        }
        component = vue_class_component_1.default(options)(component);
        if (options.name) {
            Object.defineProperty(component, 'name', {
                value: options.name
            });
        }
        return component;
    };
};
exports.Component = Component;
var Watch = function (path, watchOptions) {
    if (watchOptions === void 0) { watchOptions = {}; }
    var deep = watchOptions.deep, immediate = watchOptions.immediate;
    return vue_class_component_1.createDecorator(function (options, handler) {
        options.watch = options.watch || {};
        options.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
};
exports.Watch = Watch;
