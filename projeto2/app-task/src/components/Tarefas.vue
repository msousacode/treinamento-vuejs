<template>
  <!--Componente Pai de todas as tarefas-->
  <div id="tarefas">
    {{ teste }}
    <!--Recebe o descritivo da tarefa-->
    <input type="text" />

    <!--Cria a tarfefa adicionando a mesma dentro de um array itens onde ficam armazenadas todas as tarefas-->
    <button type="button" @click="adicionarTarefa('Teste')">Nova tarefa</button>

    <br />
    <br />

    <ul>
      <!-- Aqui estou realizando a interação do array de objetos
        Sendo que esses itens representarão as tarefas.-->
      <li v-for="(item, index) in itens()" :key="item.message">
        <div id="tarefa">{{ index + 1 }} - {{ item.message }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      teste: "Palmeiras",
    };
  },
  methods: {
    //A função itens retorna o array de objetos que representa as minhas tarefas.
    itens() {
      return [{ message: "Algo" }, { message: "Outro" }];
    },
    adicionarTarefa(value) {
      console.info(value);
    },
  },
};
</script>

<style scoped>
#tarefa {
  padding: 10px;
  margin: 10px;
  border: solid 1px green;
}
</style>
