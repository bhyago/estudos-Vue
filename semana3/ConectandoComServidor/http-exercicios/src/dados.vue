<template>
	<div id="app" class="container">
		<h1>Tela de vizualização</h1>
		<b-card>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
                    <b-form-group :label="usuario.titulo" v-if="usuario.obrigatorio === true ? usuario.titulo += '*' : usuario.titulo" >
				        <b-form-input :type="usuario.modelo" size="lg"
					    placeholder="Informe o dado"
				        ></b-form-input>
			        </b-form-group>
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

    },
    created() {
			this.$http.get('propriedades').then(res => {
				this.usuarios = res.data
				console.log(res.data);
			})
		} 
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