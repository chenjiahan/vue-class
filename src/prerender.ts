// Preredner Decorator
import Vue from 'vue'
export type VueClass = { new (): Vue } & typeof Vue

export const Prerender = (component: VueClass): VueClass => {
    return component.extend({
        mounted: function() {
            document.dispatchEvent(new Event('mounted'));
        }
    });
}
