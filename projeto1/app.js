new Vue({  
  el: "#app",  
  data: {
    valendo: false,
    vidaMonstro: 100,
    vidaJogador: 100,
    logs: [],
  },
  computed: {
    hasResultado() {
      return this.vidaJogador == 0 || this.vidaMonstro == 0;
    },
  },
  methods: {
    iniciarJogo() {        
        this.valendo = true
        this.vidaJogador = 100
        this.vidaMonstro = 100
        this.logs = []
    },
    ataque(especial) {
      this.dano("vidaMonstro", 5, 10, especial, "Jogador", "Monstro", "player");
      if (this.vidaMonstro > 0) {
        this.dano("vidaJogador", 7, 12, false, "Monstro", "Jogador", "monster");
      }
    },
    dano(variavel, min, max, especial, origem, alvo, cls) {
      const extra = especial ? 5 : 0;
      const dano = this.getRandom(min + extra, max + extra);
      this[variavel] = Math.max(this[variavel] - dano, 0);
      this.registrarLog(`${origem} atingiu ${alvo} com ${dano}`, cls);
    },
    curar(){
        const saude = this.getRandom(min, max)
        this.vidaJogador = Math.min(this.vidaJogador + saude, 100)
        this.registrarLog(`Jogador ganhou força de ${saude}.`, 'player')
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registrarLog(mensagem, cls) {        
      this.logs.unshift({ mensagem, cls });
    },
  },
  watch: {
    hasResultado(value) {
      if (value) this.running = false;
    },
  },
});
