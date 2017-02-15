import * as Vue from 'vue';
import ClassDecorator, { createDecorator } from 'vue-class-component';

export interface VueClassOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    template?: any;
}

// hack for tsc
export interface WatchOptions extends Vue.WatchOptions {}

export type VueClass = { new (): Vue } & typeof Vue;

// Component Decorator
const Component = <U extends Vue>(options: VueClassOptions<U>): <V extends VueClass>(component: V) => V => {
    return (component: VueClass): VueClass => {
        component = ClassDecorator(options)(component);

        if (typeof options.template === 'function') {
            component = options.template(component);
        }

        if (options.name) {
            Object.defineProperty(component, 'name', {
                value: options.name
            });
        }

        return component;
    };
};

// Watch Decorator
const Watch = (path: string, options: WatchOptions = {}): MethodDecorator => {
    const { deep, immediate } = options;
    return createDecorator((componentOptions: Vue.ComponentOptions<Vue>, handler: string): void => {
        componentOptions.watch = componentOptions.watch || {};
        (<any>componentOptions.watch)[path] = { handler, deep, immediate };
    });
};

export { Vue, Component, Watch };
