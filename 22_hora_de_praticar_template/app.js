new Vue({
  el: "#desafio",
  data: {
    nome: "Michael",
    idade: 20,
    imgHtml: "<img height='400' src='https://img.freepik.com/vetores-premium/circulo-do-zodiaco-mapa-natal-horoscopo-com-signos-do-zodiaco-e-reguas-de-planetas-ilustracao-a-preto-e-branco-de-um-horoscopo-grafico-de-roda-do-horoscopo_101969-849.jpg?w=740'/>"
  },
  methods: {
    multiplicarIdadePor3: function () {
      return this.idade * 3;
    },
    numeroRandom: function () {
      return Math.random().toPrecision(1) * 10;
    },
    carregarNome: function () {
        this.nome = nome
    }
  },
});
