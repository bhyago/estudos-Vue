let app = new Vue ({
    el: '#app',
    data: {
      titulo: 'Usando VueJS'
    },
    methods: {
        saudacao: function() {
            return this.titulo
        }
    },
  })