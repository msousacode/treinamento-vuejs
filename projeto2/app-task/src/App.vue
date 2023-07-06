<template>
  <div id="app">
    <!--Tarefas é o componente central que gera e controla todas as tarefas-->
    <tarefas />
  </div>
</template>

<script>
import Tarefas from "./components/Tarefas.vue";

export default {
  name: "App",
  components: {
    tarefas: Tarefas,
  },
};
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
