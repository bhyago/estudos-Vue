<template>
  <div id="app">
    <h1>Diretivas</h1>
    <p v-destaque="'red'">Usando diretiva personalizada</p>
    <p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
    <!-- <p v-teste:argumento.mod1.mod2.mod3="'valor'"></p> -->
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        // el.style.background = 'lightgreen'
				// el.style.background = binding.value
				const aplicarCor = cor => {
					if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
				}

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000;
        if (binding.modifiers["alternar"]) {

				}

				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1

				setTimeout(() => {
					aplicarCor(binding.value)
				}, atraso)

        setTimeout(() => {
          aplicarCor(binding.value)
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "red",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
