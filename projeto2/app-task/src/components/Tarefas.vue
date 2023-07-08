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
          <b-button variant="outline-primary" @click="adicionarTarefa">
            Adicionar Tarefa
          </b-button>
        </b-col>

        <ul>
          <!-- Aqui estou realizando a interação do array de objetos
          Sendo que esses itens representarão as tarefas.-->
          <li v-for="item in tarefas" v-bind:key="item.unique">
            <b-col>
              <!--Componente Filho recebe dados do componente Pai-->
              <tarefa-item
                v-bind:tarefa-item="item"
                @atualizarTarefa="atualizarTarefa"
              />
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
  name: "componente-tarefas",
  data: () => {
    //Todas essas propriedades estão na DOM.
    //A declaração deleas na propriedade data torna possível realizar o binding de dados.
    return {
      descritivoTarefa: "",
      tarefas: [],
      unique: null, //Unique representa um ID dos objetos do array tarefas.
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
    atualizarTarefa(payload) {
      if (payload.tipo === "finalizar") {
        //Atualiza isPendente para false se a tarefa foi finalizada.
        //Para isso realiza um map em tarefas e ao encontrar o objeto por unique 
        //altera a flag isPendente para false  
        this.tarefas.map((obj) => {
          if (obj.unique === payload.unique) {
            obj.isPendente = false;
          }
        });
      }

      if (payload.tipo == "cancelar") {
        //Remove um item da lista se a tarefa foi cancelada.
        const index = this.tarefas.findIndex(
          (obj) => obj.unique === payload.unique
        );
        this.tarefas.splice(index, 1);
      }
    },
  },
  //Componentes filhos registrados.
  components: {
    "tarefa-item": TarefaItem,
  },
};
</script>

<style scoped></style>
