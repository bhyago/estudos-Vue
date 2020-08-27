let app = new Vue({
	el:'#app',
	data:{
		aviso:true,
		divid:'qualquer',
		link:'https://google.com.br',
		n:12
	},
	methods: {
		clicou:() => {
			alert("Eventa funcionou! Clicou!")
		},
		enviou:() => {
			alert("Formulario enviado")
		}
	},
});