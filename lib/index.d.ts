import * as Vue from 'vue';
export interface VueClassOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    template?: any;
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
export default function <U extends Vue>(options: VueClassOptions<U>): <V extends VueClass>(component: V) => V;
