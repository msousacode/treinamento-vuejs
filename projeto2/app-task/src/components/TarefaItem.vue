<template>
  <div
    class="tarefa"
    v-bind:class="
      tarefaItem.isPendente ? 'tarefa-pendente' : 'tarefa-finalizada'
    "
    @click="finalizarTarefa(true)"
  >
    <span>
      {{ tarefaItem.message }}
    </span>
  </div>
</template>

<script>
export default {
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

<style scoped>
.tarefa-finalizada {
  -webkit-box-shadow: 0px 0px 50px 3px #f2e8f3;
  -moz-box-shadow: 0px 0px 50px 3px #f2e8f3;
  box-shadow: 0px 0px 50px 3px #f2e8f3;

  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;

  height: 50px;
  margin-bottom: 10px;
  background-color: rgb(16, 83, 16);

  cursor: grab;
}

.tarefa-pendente {
  -webkit-box-shadow: 0px 0px 50px 3px #f2e8f3;
  -moz-box-shadow: 0px 0px 50px 3px #f2e8f3;
  box-shadow: 0px 0px 50px 3px #f2e8f3;

  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;

  height: 50px;
  margin-bottom: 10px;
  background-color: rgb(189, 18, 18);

  cursor: grab;
}

span {
  padding: 30px;
  color: white;
}
</style>
