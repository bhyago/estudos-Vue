<template>
	<div id="app" class="container">
		<h1>Tela de vizualização</h1>
		<b-card>
			<FormDinamico />
		</b-card>
	</div>
</template>

<script>
	import FormDinamico from '@/components/FormDinamico.vue';
export default {
	components: { FormDinamico } 
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