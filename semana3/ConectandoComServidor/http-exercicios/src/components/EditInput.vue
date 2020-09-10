<template>
  <b-card>
    <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter inputs</b-button>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Modelo</strong>
        {{usuario.modelo}}
        <br />
        <strong>titulo</strong>
        {{usuario.titulo}}
        <br />
        <strong>obrigadorio</strong>
        {{usuario.obrigatorio}}
        <strong>id</strong>
        {{usuario.id}}
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
  </b-card>
</template>

<script>
export default {
  data() {
    usuarios: []
  },
  methods: {
    obterUsuarios() {
			this.$http.get('propriedades').then(res => {
				this.usuarios = res.data
				console.log(this.usuarios);
			})
		}
  }
};
</script>