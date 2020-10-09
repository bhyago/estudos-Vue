<template>
  <v-autocomplete
    :label="formulario.label"
    :placeholder="formulario.placeholder"
    :required="formulario.required"
    :auto-select-first="formulario.autoSelectFirst"
    :chips="formulario.chips"
    :clearable="formulario.clearable"
    :deletable-chips="formulario.deletableChips"
    :dense="formulario.dense"
    :filled="formulario.filled"
    :multiple="formulario.multiple"
    :rounded="formulario.rounded"
    :small-chips="formulario.smallChips"
    :solo="formulario.solo"
    :solo-inverted="formulario.soloInverted"
  ></v-autocomplete>
</template>
<script>
import propsMixin from "@/mixins/propsMixin";
export default {
  mixins: [propsMixin],
};
</script>