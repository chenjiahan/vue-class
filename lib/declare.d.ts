import Vue from 'vue';
export interface ComponentOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    render?: any;
}
export interface WatchOptions extends Vue.WatchOptions {
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
