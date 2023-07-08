<template>
  <b-card-group deck>
    <b-card
      style="margin-top: 10px"
      bg-variant="light"
      v-bind:header="'Pendente - Criado em: ' + dataCriacao"
      class="text-center"
    >
      <b-card-text>{{ tarefaItem.message }}</b-card-text>
      <b-button
        variant="success"
        @click="atualizarTarefa(tarefaItem.unique, 'finalizar')"
      >
        Finalizada
      </b-button>
      <b-button
        variant="danger"
        @click="atualizarTarefa(tarefaItem.unique, 'cancelar')"
      >
        Cancelada
      </b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "componente-tarefa-item",
  data: () => {
    return {
      dataCriacao: new Date().toLocaleDateString("pt-BR"),
    };
  },
  methods: {
    atualizarTarefa(unique, tipo) {
      //Filho emite um evento para o componente Pai informando que a tarefa foi finalizada
      //Passando para o componente Pai os dados unique que é a chave única e o tipo de atualização que pode ser finalizada ou cancelada.
      this.$emit("atualizarTarefa", {
        unique: unique,
        tipo: tipo,
      });
    },
  },
  //Declaração dos dados que estou esperando receber do componente Pai.
  props: {
    tarefaItem: Object,
  },
};
</script>

<style scoped></style>
