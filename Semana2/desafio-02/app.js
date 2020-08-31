new Vue({
    el: '#desafio',
    data: {
        valor: 'test'
    },
    methods: {
        clickAlert: function() {
            alert('Você clicou no botão')
        },
        keyDown: function(event) {
            this.valor = event.target.value
        },
    },
})