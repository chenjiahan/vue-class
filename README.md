# Vue Class
Vue class decorator for typescript.

## Install
```
npm i vue-class --save
```

## Usage
app.ts
``` typescript
import render from './app.html';
import { Vue, Component, Watch } from 'vue-class';

@Component({
   render,
   name: 'app',
   props: ['value']
})
export default class App extends Vue {
   private name: string;
   private value: number;

   @Watch('value')
   private onValueChange(value: number): void {
      console.log(value);
   }
}
```

## Dependences
- [vue-class-component](https://github.com/vuejs/vue-class-component)
