<template>
  <!--Componente Pai de todas as tarefas.-->
  <div id="tarefas">
    <ul>
      <li>
        {{ nomeApp }}
      </li>
      <li>
        {{ versao }}
      </li>
      <li>
        {{ desenvolvedor }}
      </li>
    </ul>

    <!--Total das tarefas-->
    <h5>Total de tarefas: {{ tarefas.length }}</h5>

    <!--Recebe o descritivo da tarefa.-->
    <input type="text" v-model="descritivoTarefa" />    

    <!--Cria a tarfefa adicionando a mesma dentro de um array itens onde ficam armazenadas todas as tarefas.-->
    <button type="button" @click="adicionarTarefa()">Nova tarefa</button>

    <br />
    <br />

    <ul>
      <!-- Aqui estou realizando a interação do array de objetos
        Sendo que esses itens representarão as tarefas.-->
      <li v-for="(item, index) in tarefas" :key="item.message">
        <div id="tarefa">{{ index + 1 }} - {{ item.message }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    //Todas essas propriedades estão na DOM.
    //A declaração deleas na propriedade data torna possível realizar o binding de dados.
    return {
      nomeApp: "Gerenciador de Tarefas",
      versao: "1.0.0",
      desenvolvedor: "Michael Sousa",
      descritivoTarefa: "",
      tarefas: [],
    };
  },
  methods: {
    //Metódo responsável por adicionar uma tarefa.
    adicionarTarefa() {
      this.tarefas.unshift({
        message: this.descritivoTarefa,
      });
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
