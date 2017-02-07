# Vue Class
Vue class decorator for typescript.

## Install
```
npm i vue-class --save
```

## Usage
app.ts
``` typescript
import vue = require('vue');
import template from './app.html';
import Component from 'vue-class';

@Component({
   name: 'app',
   template,
   props: ['message']
})
export default class App extends Vue {
   public name: string;
   public message = 'hello world';
}
```

## Dependences
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-template-loader](https://github.com/ktsn/vue-template-loader)
