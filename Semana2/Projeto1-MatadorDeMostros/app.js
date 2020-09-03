new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        mosterLife: 100,
        logs:[]
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
           this.logs = []
       },
       attack(especial) {
           this.hurt('mosterLife', 5, 12, especial, 'Jogador', 'Mostro', 'player')
           if(this.mosterLife > 0) {
               this.hurt('playerLife', 7, 12, false, 'Mostro', 'Jogador', 'monster')
           }
       },
       hurt(atr, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}`, cls)
       },

       healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
       },

       heal(min, max) {
           const heal = this.getRandom(min, max)
           this.playerLife = Math.min(this.playerLife + heal, 100)
           thia.registerLog(`Jogador ganhou força de ${heal}`, 'player')
       },
       getRandom(min, max) {
           const value = Math.random() * (max - min) + min
           return Math.round(value)
       },
       registerLog(text, cls) {
            this.logs.unshift({ text, cls })
       },
    },
    watch: {
        hasResult(value) {
            if(value) this.running  = false

        }
    },
})