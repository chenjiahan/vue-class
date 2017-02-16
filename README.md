# Vue Class
Vue class decorator for typescript.

## Install
```
npm i vue-class --save
```

## Usage
app.ts
``` typescript
import template from './app.html';
import { Vue, Component, Watch, Computed } from 'vue-class';

@Component({
   name: 'app',
   template,
})
export default class App extends Vue {
   private name: string;
   private value: number;

   @Watch('value')
   private onValueChange(value): void {
      console.log(value);
   }

   @Computed
   private computedValue(): number {
       return this.number + 1;
   }
}
```

## Dependences
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-template-loader](https://github.com/ktsn/vue-template-loader)
