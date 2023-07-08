<template>
  <div id="app">
    <h6>{{ nomeApp }} - version: {{ versao }}</h6>

    <!--Tarefas é o componente central que gera e controla todas as tarefas-->
    <tarefas />
  </div>
</template>

<script>
import Tarefas from "./components/Tarefas.vue";

export default {
  name: "App",
  data: () => {
    return {
      nomeApp: "Gerenciador de Tarefas",
      versao: "1.0.0",
      desenvolvedor: "Michael Sousa",
    };
  },
  components: {
    tarefas: Tarefas,
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
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

ul {
  list-style-type: none;
}
</style>
