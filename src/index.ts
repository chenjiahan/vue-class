import ClassDecorator from 'vue-class-component'

export default function (options) {
  return function (component) {
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
