<template>
  <v-text-field
    :color="formulario.color"
    :label="formulario.label === 'event' ? label : formulario.label"
    :placeholder="formulario.placeholder"
    :outlined="formulario.outlined"
    :filled="formulario.filled"
    :counter="formulario.InputCounter === true ? formulario.counter : undefined"
    :maxlength="formulario.counter"
    :shaped="formulario.shaped"
    :solo-inverted="formulario.soloInverted"
    :rules="[rules.required]"
  ></v-text-field>
</template>

<script>
import propsMixin from "@/mixins/propsMixin";
import eventBus from "@/eventBus";

export default {
  mixins: [propsMixin],
  data() {
    return {
      label: "",
      rules: {
        required: (value) => !!value || "campo obrigatorio.",
        counter: (value, numero) =>
          value.length <= numero || `Max ${numero} caracteres`,
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "e-mail invalido.";
        },
        cpf: (value) => {
          let pattern = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
          return pattern.test(value) || "CPF invalido";
        },
      },
    };
  },
  created() {
    eventBus.$on("novoPlaceholder", (label) => {
      this.label = label;
    });
  },
  methods: {},
};
</script>