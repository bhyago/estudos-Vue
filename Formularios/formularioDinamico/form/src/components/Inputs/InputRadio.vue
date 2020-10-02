<template>
  <v-radio-group
    v-model="radios"
    :row="formulario.row"
    :column="formulario.colun"
  >
    <v-radio
      :label="formulario.label"
      :value="formulario.value"
      :color="formulario.color"
    />
  </v-radio-group>
</template>
<script>
export default {
  props: {
    formulario: Object,
  },
  data() {
    return {
      label: "cpf",
      radios: "",
      radioButton: [],
    };
  },
};
</script>