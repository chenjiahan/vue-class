import Vue from 'vue';

// extend ComponentOptions
export interface ComponentOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    render?: any;
}

// hack for tsc
export interface WatchOptions extends Vue.WatchOptions { }

export type VueClass = { new (): Vue } & typeof Vue;
