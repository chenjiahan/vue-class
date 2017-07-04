"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.Vue = vue_1.default;
var vue_class_component_1 = require("vue-class-component");
var vue_property_decorator_1 = require("vue-property-decorator");
exports.Inject = vue_property_decorator_1.Inject;
exports.Provide = vue_property_decorator_1.Provide;
exports.Model = vue_property_decorator_1.Model;
exports.Prop = vue_property_decorator_1.Prop;
exports.Watch = vue_property_decorator_1.Watch;
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
__export(require("./prerender"));
