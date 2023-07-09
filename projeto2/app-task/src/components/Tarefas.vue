<template>
  <!--Componente Pai de todas as tarefas.-->

  <div>
    <b-container class="bv-example-row">
      <!--Total das tarefas-->
      <h6>Pendentes: {{ tarefasPendentes }}</h6>
      <h6>Finalizadas: {{ tarefasFinalizadas }}</h6>

      <!--Recebe o descritivo da tarefa.-->
      <b-form-input type="text" v-model="descritivoTarefa" />

      <!--Cria a tarfefa adicionando a mesma dentro de um array itens onde ficam armazenadas todas as tarefas.-->
      <b-button id="btn" variant="primary" @click="adicionarTarefa">
        Adicionar Tarefa
      </b-button>

      <!-- Aqui estou realizando a interação do array de objetos
          Sendo que esses itens representarão as tarefas.-->
      <div v-for="item in tarefas" v-bind:key="item.unique">
        <!--Componente Filho recebe dados do componente Pai-->
        <tarefa-item
          v-bind:tarefa-item="item"
          @atualizarTarefa="atualizarTarefa"
        />
      </div>
    </b-container>
  </div>
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
      tarefasPendentes: 0,
      tarefasFinalizadas: 0,
    };
  },
  methods: {
    //Metódo responsável por adicionar uma tarefa.
    adicionarTarefa() {
      this.tarefas.unshift({
        unique: Date.now(),
        message: this.descritivoTarefa,
        isPendente: true,
        dataCriacao: new Date().toLocaleDateString("pt-BR"),
      });
      this.tarefasPendentes++;
    },
    atualizarTarefa(payload) {
      if (payload.tipo === "finalizar") {
        //Atualiza isPendente para false se a tarefa foi finalizada.
        //Para isso realiza um map em tarefas e ao encontrar o objeto por unique
        //altera a flag isPendente para false
        this.tarefas.map((obj) => {
          if (obj.unique === payload.unique) {
            obj.isPendente = false;
            this.tarefasPendentes--;
            this.tarefasFinalizadas++;
          }
        });
      }

      if (payload.tipo == "cancelar") {
        //Remove um item da lista se a tarefa foi cancelada.
        const index = this.tarefas.findIndex(
          (obj) => obj.unique === payload.unique
        );
        this.tarefas.splice(index, 1);
        this.tarefasPendentes--;
      }
    },
  },
  //Componentes filhos registrados.
  components: {
    "tarefa-item": TarefaItem,
  },
};
</script>

<style scoped>
#btn {
  width: 100%;
  margin-top: 10px;
}

li {
  margin-top: 10px;
  width: 100%;
}

h6 {
  color: #fff;
}
</style>
