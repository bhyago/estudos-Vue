function bandeira(pais) {
  return '<img src="paises/'+pais+'.png" />';
}

Vue.component("pais", {
  props:['nome', 'continente'],
  template:`<p v-html="nome + continente"></p>`
})

let app = new Vue ({
  el: '#app',
  data: {
    argentina:bandeira('argentina'),
    brazil:bandeira('brazil'),
    china:bandeira('china'),
    uk:bandeira('uk'),
    usa:bandeira('usa')
  },
  methods: {
    paises:function() {
      return [
        {bandeira: this.argentina, continente: 'America do sul'},
        {bandeira: this.brazil, continente: 'America do sul'},
        {bandeira: this.china, continente: 'Asia'},
        {bandeira: this.uk, continente: 'Europa'},
        {bandeira: this.usa, continente: 'America do Norte'},
      ];
    }
  },
})