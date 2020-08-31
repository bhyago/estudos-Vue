
Vue.component('inputDynamic', {
	template:`
		<input>nomeInput</input>
		<input>test</input>
		`
})

let app = new Vue({
	el:'#app',

	data:{
		nomeInput: '',
		tipo: '',
		obrigatoriedade: false,
		
		newCampo: false,
		newInput: '',
		lista: [],
	},
	methods: {
		NovoCampo:function() {
			this.newCampo = true
		},
		add:function() {
			this.newInput = '<label for="nomeInput">'+this.nomeInput + '</label><input id="nomeInput" type='+this.tipo+'><br> <br>'
			this.lista.push(this.newInput)
			this.nomeInput = ''
		}
	},
});

