<template>
  <!--Componente Pai de todas as tarefas.-->

  <b-container class="bv-example-row">
    <div>
      <!--Total das tarefas-->
      <h5>Total de tarefas: {{ tarefas.length }}</h5>

      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2">
        <b-col>
          <!--Recebe o descritivo da tarefa.-->
          <b-form-input type="text" v-model="descritivoTarefa" />
        </b-col>

        <b-col>
          <!--Cria a tarfefa adicionando a mesma dentro de um array itens onde ficam armazenadas todas as tarefas.-->
          <b-button variant="outline-primary" @click="adicionarTarefa()">
            Adicionar Tarefa
          </b-button>
        </b-col>

        <ul>
          <!-- Aqui estou realizando a interação do array de objetos
          Sendo que esses itens representarão as tarefas.-->
          <li v-for="item in tarefas" v-bind:key="item.unique">
            <b-col>
              <!--Componente filho recebe dados do componente Pai-->
              <tarefa-item v-bind:tarefa-item="item" />
            </b-col>
          </li>
        </ul>
      </b-row>
    </div>
  </b-container>
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
