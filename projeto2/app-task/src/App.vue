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
body {
  font-family: "Lato", sans-serif;
  background-image: linear-gradient(
    to bottom,
    #051937,
    #0d315f,
    #144b8b,
    #1767ba,
    #1284eb
  );
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
