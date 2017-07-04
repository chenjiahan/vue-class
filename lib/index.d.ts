import Vue from 'vue';
import { VueClass, ComponentOptions } from './declare';
import { Inject, Provide, Model, Prop, Watch } from 'vue-property-decorator';
declare const Component: <U extends Vue>(options: ComponentOptions<U>) => <V extends VueClass>(component: V) => V;
export { Vue, Component, Watch, Inject, Provide, Model, Prop };
export * from './prerender';
