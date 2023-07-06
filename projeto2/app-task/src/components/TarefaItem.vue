<template>
  <div id="tarefa">{{ tarefaItem.message }}</div>
</template>

<script>
export default {
    //Declaração dos dados que estou esperando receber do componente Pai.
    props: {
        tarefaItem: Object
    }  
};
</script>

<style scoped>
    #tarefa {
    padding: 10px;
    margin: 10px;
    border: solid 1px green;
    }
</style>
