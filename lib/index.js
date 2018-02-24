"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.Vue = vue_1.default;
var vue_class_component_1 = require("vue-class-component");
exports.mixins = vue_class_component_1.mixins;
vue_class_component_1.default.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave'
]);
var Component = function (options) {
    return function (component) {
        var render = options.render;
        if (typeof render === 'object') {
            options.render = render.render;
            options.staticRenderFns = render.staticRenderFns;
        }
        component = vue_class_component_1.default(options)(component);
        component.install = function () {
            vue_1.default.component(options.name, this);
        };
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
__export(require("./prerender"));
