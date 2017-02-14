# Vue Class
Vue class decorator for typescript.

## Install
```
npm i vue-class --save
```

## Usage
app.ts
``` typescript
import Vue = require('vue');
import template from './app.html';
import { Component, Prop, Watch } from 'vue-class';

@Component({
   name: 'app',
   template,
})
export default class App extends Vue {
   public name: string;
   public value: number;
   
   @Prop({{ default: 'hello world' })
   public message;
   
   @Watch('value')
   onValueChange(): void {
      console.log(this.value);
   }
}
```

## Dependences
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-template-loader](https://github.com/ktsn/vue-template-loader)
