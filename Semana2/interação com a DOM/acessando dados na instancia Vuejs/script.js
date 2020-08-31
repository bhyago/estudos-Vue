let app = new Vue ({
    el: '#app',
    data: {
      titulo: 'Usando VueJS',
      link: 'http://google.com'
    },
    methods: {
        saudacao: function() {
            return this.titulo
        }
    },
  })