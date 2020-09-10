<template>
  <b-list-group>
    <b-list-group-item v-for="(item, id) in itenInput" :key="id">
      <b-form-group
        :label="item.titulo"
        v-if="item.obrigatorio === true ?
         item.titulo += '*' : item.titulo"
      >
        <b-form-input 
          :type="item.modelo"  
          size="lg" 
          placeholder="Informe o dado">
        </b-form-input>
          
      </b-form-group>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
	data() {
		return {
        itenInput: [],
		}
	},
	methods: {

    },
    created() {
			this.$http.get('produtos').then(res => {
				this.itenInput = res.data
				console.log(res.data);
			})
		} 
}
</script>