"use strict";
var vue_class_component_1 = require("vue-class-component");
function default_1(options) {
    return function (component) {
        // vue class component
        component = vue_class_component_1["default"](options)(component);
        // add render function
        if (options.template) {
            component = options.template(component);
        }
        // add name
        if (options.name) {
            Object.defineProperty(component, 'name', {
                value: options.name
            });
        }
        return component;
    };
}
exports.__esModule = true;
exports["default"] = default_1;
