<template>
  <div id="app">
  </div>
</template>

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
    
      return{}
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
