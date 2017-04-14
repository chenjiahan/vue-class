# Vue Class
Decorator for building Vue2 & TypeScript2 Component.

## Install
npm
```
npm i vue-class --save
```
yarn
```
yarn add vue-class
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
- [vue-render-loader](https://github.com/chenjiahan/vue-render-loader)
