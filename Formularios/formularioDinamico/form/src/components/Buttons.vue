<template>
  <v-btn
    :class="formulario.textAlign"
    :fab="formulario.fab"
    :x-small="formulario.xsmall"
    :small="formulario.small"
    :large="formulario.large"
    :x-large="formulario.xlarge"
    :color="formulario.color"
    :dark="formulario.dark"
    :outlined="formulario.outlined"
    :rounded="formulario.rounded"
    :tile="formulario.tile"
    :block="formulario.block"
    @click="jsonEvent(formulario.onClick)"
  >
    <v-icon v-if="formulario.icon">{{ formulario.imageIcon }}</v-icon>
    {{ formulario.title }}
  </v-btn>
</template>
<script>
import propsMixin from "@/mixins/propsMixin";
export default {
  mixins: [propsMixin],
  data() {
    return {
      itensButtons: [],
    };
  },
};
</script>