let app = new Vue ({
    el: '#app',
    data: {
      contador: 0
    },
    methods: {
        soma(){
          this.contador++
        }
    },
  })