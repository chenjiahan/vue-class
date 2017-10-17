import Vue, { ComponentOptions, WatchOptions } from 'vue';
export interface ComponentOptions<V extends Vue> extends ComponentOptions<V, any, any, any> {
    render?: any;
}
export interface WatchOptions extends WatchOptions {
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
