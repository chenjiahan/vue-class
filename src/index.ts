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
const Watch = (path: string, watchOptions: WatchOptions = {}): MethodDecorator => {
    const { deep, immediate } = watchOptions;
    return createDecorator((options: Vue.ComponentOptions<Vue>, handler: string): void => {
        options.watch = options.watch || {};
        (<any>options.watch)[path] = { handler, deep, immediate };
    });
};

// Computed Decorator
const Computed = createDecorator((options: Vue.ComponentOptions<Vue>, key: string): void => {
    options.computed = options.computed || {};
    options.computed[key] = options.methods[key];
    delete options.methods[key];
});

export { Vue, Component, Watch, Computed };
