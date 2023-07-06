<template>
  <div id="app">
    <ul>
      <li>
        {{ nomeApp }}
      </li>
      <li>
        {{ versao }}
      </li>
      <li>
        {{ desenvolvedor }}
      </li>
    </ul>

    <!--Tarefas é o componente central que gera e controla todas as tarefas-->
    <tarefas />
  </div>
</template>

<script>
import Tarefas from "./components/Tarefas.vue";

export default {
  data: () => {
    return {
      name: "App",
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

.btn-default {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  font-family: Arial;
  width: 140px;
  height: 45px;
  border-width: 1px;
  color: #333333;
  border-color: #ffaa22;
  font-weight: bold;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0px 1px 0px 0px #fff6af;
  text-shadow: 0px 1px 0px #ffee66;
  background: linear-gradient(#ffec64, #ffab23);
}

.btn-default:hover {
  background: linear-gradient(#ffab23, #ffec64);
}

.css-input {
  height: 30px;
  width: 50%;
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 0px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
}
.css-input:focus {
  outline: none;
}
</style>
