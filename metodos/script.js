let app = new Vue ({
  el: '#app',
  data: {
    name: 'Hyago',
    idade: 90
  },
  methods: {
    mostrar: (name, idade) => {
      let txt = 'Olá, '+name+'-'+idade+'anos'
      return txt;
    },
    testar: () => {
      return 'Testando 1,2,3,4';
    }
  }
})