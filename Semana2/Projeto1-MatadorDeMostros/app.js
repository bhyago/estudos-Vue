new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        mosterLife: 100,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.mosterLife == 0
        }
    },
    methods: {
       startGame() {
           this.running = true
           this.playerLife = 100
           this.mosterLife = 100
       } 
    },
    watch: {
        
    },
})