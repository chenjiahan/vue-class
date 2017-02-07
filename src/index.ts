import * as Vue from 'vue'
import ClassDecorator from 'vue-class-component'

export interface VueClassOptions<V extends Vue> extends Vue.ComponentOptions<V> {
  name?: string
  template?: any
}

export type VueClass = { new (): Vue } & typeof Vue

export default function <U extends Vue>(options: VueClassOptions<U>): <V extends VueClass>(component: V) => V {
  return function (component: VueClass): VueClass {
    // vue class component
    component = ClassDecorator(options)(component)

    // add render function
    if (options.template) {
      component = options.template(component)
    }

    // add name
    if (options.name) {
      Object.defineProperty(component, 'name', {
        value: options.name
      })
    }

    return component
  }
}
