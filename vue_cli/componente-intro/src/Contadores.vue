<template>  
  <div class="contadores">
    <h1>Contadores</h1>
    <app-contador v-for="c in 5" :key="c"/>
    <hr>
    <span>
        Nessa aula aprendi como realizar o registro global e local
        dos compoenentes.
    </span>
  </div>
</template>

<script>
import Contador from "./Contador.vue";

export default {
  //registrando o componente de modo local
  components: {
    "app-contador": Contador,
  },
};
</script>

<style></style>
