import Vue from 'vue';
import ClassDecorator, { createDecorator } from 'vue-class-component';
import { VueClass, WatchOptions, ComponentOptions } from './declare';
import { Inject, Provide, Model, Prop, Watch } from 'vue-property-decorator';

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

export { Vue, Component, Watch, Inject, Provide, Model, Prop };
export * from './prerender';
