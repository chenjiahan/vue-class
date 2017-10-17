import Vue, { ComponentOptions, WatchOptions } from 'vue';

// extend ComponentOptions
export interface ComponentOptions<V extends Vue> extends ComponentOptions<V, any, any, any> {
    render?: any;
}

// hack for tsc
export interface WatchOptions extends WatchOptions { }

export type VueClass = { new (): Vue } & typeof Vue;
