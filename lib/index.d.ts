import * as Vue from 'vue';
export interface ComponentOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    render?: any;
}
export interface WatchOptions extends Vue.WatchOptions {
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
declare const Component: <U extends Vue>(options: ComponentOptions<U>) => <V extends VueClass>(component: V) => V;
declare const Watch: (path: string, watchOptions?: WatchOptions) => MethodDecorator;
export { Vue, Component, Watch };
