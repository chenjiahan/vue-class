"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prerender = function (component) {
    return component.extend({
        mounted: function () {
            document.dispatchEvent(new Event('mounted'));
        }
    });
};
