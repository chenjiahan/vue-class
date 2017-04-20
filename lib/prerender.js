"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createMounted = function (mounted) { return function () {
    if (mounted) {
        Array.isArray(mounted) ? mounted.forEach(function (fn) { fn(); }) : mounted();
    }
    document.dispatchEvent(new Event('mounted'));
}; };
exports.Prerender = function (component) {
    if (component.options) {
        var mounted = component.options.mounted;
        component.options.mounted = [createMounted(mounted)];
    }
    return component;
};
