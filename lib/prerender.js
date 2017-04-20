"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountedDispatcher = function () {
    document.dispatchEvent(new Event('mounted'));
};
exports.Prerender = function (component) {
    var mounted = component.options.mounted;
    component.options.mounted = mounted
        ? Array.isArray(mounted)
            ? mounted.concat([exports.mountedDispatcher]) : [mounted, exports.mountedDispatcher]
        : exports.mountedDispatcher;
    return component;
};
