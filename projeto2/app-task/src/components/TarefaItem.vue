<template>
  <div id="tarefa">
    <span>
      {{ tarefaItem.message }}
    </span>
  </div>
</template>

<script>
export default {
  //Declaração dos dados que estou esperando receber do componente Pai.
  props: {
    tarefaItem: Object,
  },
};
</script>

<style scoped>
#tarefa {
  -webkit-box-shadow: 0px 0px 50px 3px #f2e8f3;
  -moz-box-shadow: 0px 0px 50px 3px #f2e8f3;
  box-shadow: 0px 0px 50px 3px #f2e8f3;

  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  
  height: 50px;
  margin-bottom: 10px;
  background-color: rgb(16, 83, 16);
}

span {
  padding: 30px;
  color: white;
}
</style>
