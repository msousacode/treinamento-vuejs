<template>
  <b-row style="margin-top: 10px">
    <b-col>
      <b-card-group deck>
        <b-card
          v-bind:bg-variant="getStatusStyle(tarefaItem.isPendente)"
          v-bind:header="getSituacao(tarefaItem)"
          class="text-center"
        >
          <b-card-text>{{ tarefaItem.message }}</b-card-text>
          <b-button            
            id="btn"
            size="sm"
            variant="success"
            v-if="tarefaItem.isPendente"
            @click="atualizarTarefa(tarefaItem.unique, 'finalizar')"
          >
            Finalizar
          </b-button>
          <b-button
            id="btn"
            size="sm"
            variant="danger"
            v-if="tarefaItem.isPendente"          
            @click="atualizarTarefa(tarefaItem.unique, 'cancelar')"
          >
            Cancelar
          </b-button>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "componente-tarefa-item",  
  methods: {
    atualizarTarefa(unique, tipo) {
      //Filho emite um evento para o componente Pai informando que a tarefa foi finalizada
      //Passando para o componente Pai os dados unique que é a chave única e o tipo de atualização que pode ser finalizada ou cancelada.
      this.$emit("atualizarTarefa", {
        unique: unique,
        tipo: tipo,
      });
    },
    getStatusStyle(isPendente) {
      return isPendente ? "default" : "success";
    },
    getSituacao(tarefaItem) {
      return tarefaItem.isPendente ? `Pendente - Criado em: ${tarefaItem.dataCriacao}` : 'Tarefa Concluída!' 
    }
  },
  //Declaração dos dados que estou esperando receber do componente Pai.
  props: {
    tarefaItem: Object,
  },
};
</script>

<style scoped>
#btn {
  width: 40%;
  margin-right: 5px;
}
</style>
