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
class App extends Vue {
   value: number;

   @Watch('value')
   onValueChange(value: number): void {
      console.log(value);
   }
}
```

## Dependences
- [vue-class-component](https://github.com/vuejs/vue-class-component)
