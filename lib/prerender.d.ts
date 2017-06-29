import Vue from 'vue';
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
export declare const Prerender: (component: VueClass) => VueClass;
