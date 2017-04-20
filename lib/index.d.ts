import Vue from 'vue';
import { VueClass, WatchOptions, ComponentOptions } from './declare';
declare const Component: <U extends Vue>(options: ComponentOptions<U>) => <V extends VueClass>(component: V) => V;
declare const Watch: (path: string, watchOptions?: WatchOptions) => MethodDecorator;
export { Vue, Component, Watch };
export * from './prerender';
