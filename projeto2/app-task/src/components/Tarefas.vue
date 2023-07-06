<template>
  <!--Componente Pai de todas as tarefas.-->
  <div style="width: 100%">
    <!--Total das tarefas-->
    <h5>Total de tarefas: {{ tarefas.length }}</h5>

    <!--Recebe o descritivo da tarefa.-->
    <input class="css-input" type="text" v-model="descritivoTarefa" />

    <!--Cria a tarfefa adicionando a mesma dentro de um array itens onde ficam armazenadas todas as tarefas.-->
    <button class="btn-default" type="button" @click="adicionarTarefa()">
      Adicionar Tarefa
    </button>

    <br />
    <br />

    <ul>
      <!-- Aqui estou realizando a interação do array de objetos
        Sendo que esses itens representarão as tarefas.-->
      <li v-for="item in tarefas" v-bind:key="item.unique">
        <!--Componente filho recebe dados do componente Pai-->
        <tarefa-item v-bind:tarefa-item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
//Registrar localmente o TarefaItem.
import TarefaItem from "./TarefaItem.vue";

export default {
  name: "App",
  data: () => {
    //Todas essas propriedades estão na DOM.
    //A declaração deleas na propriedade data torna possível realizar o binding de dados.
    return {
      descritivoTarefa: "",
      tarefas: [],
    };
  },
  methods: {
    //Metódo responsável por adicionar uma tarefa.
    adicionarTarefa() {
      this.tarefas.unshift({
        unique: Date.now(),
        message: this.descritivoTarefa,
        isPendente: true,
      });
    },
  },
  //Componentes filhos registrados.
  components: {
    "tarefa-item": TarefaItem,
  },
};
</script>

<style scoped></style>
