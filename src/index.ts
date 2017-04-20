import Vue from 'vue';
import ClassDecorator, { createDecorator } from 'vue-class-component';
import { VueClass, WatchOptions, ComponentOptions } from './declare';

// register vue-router hooks
ClassDecorator.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave'
]);

// Component Decorator
const Component = <U extends Vue>(options: ComponentOptions<U>): <V extends VueClass>(component: V) => V => {
    return (component: VueClass): VueClass => {
        const { render } = options;
        if (typeof render === 'object') {
            options.render = render.render;
            options.staticRenderFns = render.staticRenderFns;
        }

        component = ClassDecorator(options)(component);

        (<any>component).install = function () {
            Vue.component(options.name, this);
        }

        return component;
    };
};

// Watch Decorator
const Watch = (path: string, watchOptions: WatchOptions = {}): MethodDecorator => {
    const { deep, immediate } = watchOptions;
    return createDecorator((options: Vue.ComponentOptions<Vue>, handler: string): void => {
        options.watch = options.watch || {};
        (<any>options.watch)[path] = { handler, deep, immediate };
    });
};

export { Vue, Component, Watch };
export * from './prerender';
