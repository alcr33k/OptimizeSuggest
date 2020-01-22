<template>
  <div id="app">
    <div id="header">
      <h1>OptimizeSuggest</h1>
      <img src="./assets/ai.png" alt="logo" />
    </div>
    <Main />
  </div>
</template>

<script>
// kanske ska sen centrera applikationen vertikalt
import Main from './components/Main.vue';

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
#header {
  display: flex;
  flex-direction: row;
  align-items:flex-start;
}
#header h1 {
  color: white;
  margin-right: 0.5em;
}
#header img {
  width: 45px;
  margin-top: 0.75em;
}

html {
  background: #2c3e50;
}
</style>
