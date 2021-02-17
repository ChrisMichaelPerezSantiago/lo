<p align="center">
  <img src="./src/assets/logo.png" alt="Lo" />
</p>

<p align="center">
  Lo is a plugin that includes all the functionalities of lodash.
</p>

<p align="center">
  <img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"/>
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-blue.svg"/>
  <img alt="MIT" src="https://img.shields.io/badge/Vue-Plugin-blue.svg"/>
</p>    

<p align="center">
  <a href="https://nodei.co/npm/@chris5855/vue-lo/"><img src="https://nodei.co/npm/@chris5855/vue-lo.png"></a>
</p>
         
<br/>


## 📦 References
- [x] [lodash](https://github.com/lodash/lodash) A modern JavaScript utility library delivering modularity, performance, & extras.


## Installation

```shell
npm i @chris5855/vue-lo
#or
yarn add @chris5855/vue-lo
```

You must install lo as a plugin via Vue.use().

```js
import Vue from 'vue';
import lo from '@chris5855/vue-lo';

Vue.use(lo);
```

## Access to lodash methods (Example)
## context.root.$_.[method]


```js
<script>
  export default {
    name: 'App',
    setup(props, context) {
      let object = {
        'a': [{ 'b': 2 }, { 'd': 4 }]
      };
      let other = {
        'a': [{ 'c': 3 }, { 'e': 5 }]
      };
      let merge = context.root.$_.merge(object, other);
    
      console.log(merge);
      return{}
    }
  }
</script>
```



## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © Lo 2021 
