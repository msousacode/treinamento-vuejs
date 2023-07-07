<template>
  <b-card-group deck @click="finalizarTarefa(true)">
    <b-card style="margin-top: 10px;" bg-variant="light" v-bind:header="'Pendente - Criado em: ' + dataCriacao" class="text-center">
      <b-card-text>{{ tarefaItem.message }}</b-card-text>
      <b-button variant="success" @click="adicionarTarefa()">
            Finalizada
          </b-button>
          <b-button variant="danger" @click="adicionarTarefa()">
            Cancelada
          </b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  data: () => {
    return {
      dataCriacao: new Date().toLocaleDateString("pt-BR"),
    };
  },
  methods: {
    finalizarTarefa: (value) => {
      //Filho emite um evento para o componente Pai informando que a tarefa foi finalizada.
      console.info("Finalizada" + value);
    },
  },
  //Declaração dos dados que estou esperando receber do componente Pai.
  props: {
    tarefaItem: Object,
  },
};
</script>

<style scoped></style>
