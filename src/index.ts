import Vue from 'vue';
import ClassDecorator, { createDecorator } from 'vue-class-component';

export interface ComponentOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    render?: any;
}

// hack for tsc
export interface WatchOptions extends Vue.WatchOptions { }

export type VueClass = { new (): Vue } & typeof Vue;

// register hooks
ClassDecorator.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave'
])

// Component Decorator
const Component = <U extends Vue>(options: ComponentOptions<U>): <V extends VueClass>(component: V) => V => {
    return (component: VueClass): VueClass => {
        if (typeof options.render === 'object') {
            const obj = options.render;
            options.render = obj.render;
            options.staticRenderFns = obj.staticRenderFns;
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
