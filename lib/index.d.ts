import * as Vue from 'vue';
export interface VueClassOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    template?: any;
}
export interface WatchOptions extends Vue.WatchOptions {
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
export declare const Component: <U extends Vue>(options: VueClassOptions<U>) => <V extends (new () => Vue) & typeof Vue>(component: V) => V;
export declare const Watch: (path: string, options?: WatchOptions) => <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
