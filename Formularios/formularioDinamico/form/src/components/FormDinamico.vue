<template>
  <v-form>
    <div class="container row">
      <v-col
        v-for="(item, id) in form.componentes"
        :key="id"
        :cols="item.coluns"
      >
        <InputText v-if="item.tipo === 'entradaDeTexto'" :formulario="item" />
        <Buttons v-if="item.tipo === 'button'" :formulario="item" />
        <InputRadio v-if="item.tipo === 'radioGroup'" :formulario="item" />
        <AutoComplete v-if="item.tipo === 'autoComplete'" :formulario="item" />
      </v-col>
    </div>
  </v-form>
</template>
<script>
import InputText from "./Inputs/InputText";
import InputRadio from "./Inputs/InputRadio";
import Buttons from "./Buttons";
import AutoComplete from "./Inputs/AutoComplete";
export default {
  components: {
    InputText,
    InputRadio,
    Buttons,
    AutoComplete,
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
