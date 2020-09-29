<template>
  <v-form>
    <div v-for="(item, id) in form.componentes" :key="id">
      <InputText v-if="item.tipo === 'entradaDeTexto'" :formulario="item" />
      <Buttons v-if="item.tipo === 'button'" :formulario="form.componentes" />
      <InputRadio :props="form.radioButtons" />
    </div>
  </v-form>
</template>
<script>
import InputText from "./Inputs/InputText";
import InputRadio from "./Inputs/InputRadio";
import Buttons from "./Buttons";
export default {
  components: {
    InputText,
    InputRadio,
    Buttons,
  },
  data() {
    return {
      form: [],
    };
  },
  created() {
    this.$http.get("form").then((res) => {
      this.form = res.data;
    });
  },
};
</script>
