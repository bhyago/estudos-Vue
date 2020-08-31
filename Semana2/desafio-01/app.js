let app = new Vue ({
    el: '#desafio',
    data: {
      nome: 'Hyago',
      idade:23,
      nomeIdade: `Nome:${this.nome}, idade${this.idade}`,
      get nomeIdade() {
          return this._nomeIdade
      },
      set nomeIdade(value) {
          this._nomeIdade = value
      },
      img: 'https://www.bing.com/images/blob?bcid=TqxJpmAJQb4B3RMR6McEiDSUeKFV.....5A'
    },
    methods: {
        numeroRandomico: function() {
            return Math.random() * (1 - 0) + 0;
        }
    },
  })