function bandeira(pais) {
  return '<img src="paises/'+pais+'.png" />';
}

let app = new Vue ({
  el: '#app',
  data: {
    pais:'brazil',
    argentina:bandeira('argentina'),
    brazil:bandeira('brazil'),
    china:bandeira('china'),
    uk:bandeira('uk'),
    usa:bandeira('usa')
  },
  methods: {
    
  },
})