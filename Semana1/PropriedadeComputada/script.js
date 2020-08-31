let app = new Vue({
	el:'#app',
	data:{
		nome:'Bonieky'
	},
	methods: {
		
	},
	computed: {
		nomeInvertido:function() {
			return this.nome.split('').reverse().join('');
		}
	}
});