<template>
  <v-container>
    <v-row>
      <v-col :key="id" :cols="item.coluns">
        <v-text-field
          :color="item.color"
          :label="item.label"
          :placeholder="item.placeholder"
          :outlined="item.outlined"
          :filled="item.filled"
          :counter="item.InputCounter === true ? item.counter : undefined"
          :maxlength="item.counter"
          :rules="[rules.required]"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["formulario"],
  data() {
    return {
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
  // created() {
  //   this.$http.get("form").then((res) => {
  //     this.itemInput = res.data;
  //     console.log(this.itemInput);
  //   });
  // },
};
</script>