<template>
	<div id="app" class="container">
		<h1>Tela de cadastro</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" 
		:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Modelo:">
				<b-form-input type="text" size="lg"
					v-model="inputs.modelo"
					placeholder="Informe o modelo"
				></b-form-input>
			</b-form-group>

			<b-form-group label="titulo:">
				<b-form-input type="text" size="lg"
					v-model="inputs.titulo"
					placeholder="Informe o titulo"
				></b-form-input>
			</b-form-group>

			<b-form-group label="obrigatorio:">
				<b-form-input type="text" size="lg"
					v-model="inputs.obrigatorio"
					placeholder="campo obrigatorio ?"
				></b-form-input>
				<hr>
				<b-button 
					@click="salvar"
					size="lg"
					variant="primary">Salvar</b-button>
				<b-button 
					@click="obterUsuarios" 
					size="lg" 
					variant="success" class="ml-2">Obter Usuario</b-button>
			</b-form-group>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
					<strong>Modelo</strong> {{usuario.modelo}} <br>
					<strong>titulo</strong> {{usuario.titulo}} <br>
					<strong>obrigadorio</strong> {{usuario.obrigatorio}}
					<strong>id</strong> {{usuario.id}}
					<b-button 
						variant="warning" 
						size="lg"
						@click="carregar(id)"
						>Carregar</b-button>
					<b-button 
						variant="danger" 
						size="lg" 
						class="ml-2"
						@click="excluir(id)"
						>Excluir</b-button>
				</b-list-group-item>
			</b-list-group>
			<hr>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			inputs: {
				modelo: '',
				id: null,
				titulo: '',
				obrigatorio: false
			}
		}
	},
	methods: {
		limpar() {
			this.inputs.modelo = '',
			this.inputs.id = null,
			this.inputs.titulo = '',
			this.inputs.obrigatorio = false
			this.mensagens = []
		},
		carregar(id) {
			this.id = id
			this.inputs = { ...this.inputs[id]}
		},
		excluir(id) {
			this.$http.delete(`/propriedades/${id}`).then(() => this.limpar())
		},
		salvar() {
			this.$http.post('propriedades',  this.inputs)
				.then(resp => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizado com sucesso!',
						tipo: 'success'
					})
				})
		},
		obterUsuarios() {
			this.$http.get('propriedades').then(res => {
				this.usuarios = res.data
				console.log(this.usuarios);
			})
		}
	},

	// created() {
	// 	this.$http.post('propriedades', {
	// 		inputs: {
	// 			modelo:'test',
	// 			titulo:'titulotest',
	// 			obrigatorio: 'true'
	// 		}
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
