<template>
  <div class="container">
		<h1>Tela de cadastro</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" 
		:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
       <div>
    <b-form-group label="Individual radios">
      <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>

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
					variant="primary"
        >Salvar</b-button>
				
			</b-form-group>
		</b-card>
      <EditInput />
	</div>
</template>

<script>
import EditInput from '@/components/EditInput.vue';
export default {
  components: { EditInput },

	data() {
		return {
      selected:'',
      value: '',
			mensagens: [],
			inputs: {
				modelo: '',
				id: null,
				titulo: '',
        obrigatorio: false,
        radio: false
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
	},
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