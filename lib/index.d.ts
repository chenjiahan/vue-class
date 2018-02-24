import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { VueClass, WatchOptions, ComponentOptions } from './declare';
declare const Component: <U extends Vue>(options: ComponentOptions<U>) => (component: VueClass) => VueClass;
declare const Watch: (path: string, watchOptions?: WatchOptions) => MethodDecorator;
export { Vue, Component, Watch, mixins };
export * from './prerender';
