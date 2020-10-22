<template>
  <v-radio-group
    v-model="radios"
    :row="formulario.row"
    :column="formulario.column"
  >
    <div :v-if="formulario.radioButtons">
      <v-radio
        v-for="(item, id) in formulario.radioButtons"
        :key="id"
        :label="item.label"
        :value="item.value"
        :color="item.color"
        @click="aoClicar(item)"
      />
    </div>
  </v-radio-group>
</template>
<script>
import propsMixin from "@/mixins/propsMixin";
import eventBus from "@/eventBus";
export default {
  mixins: [propsMixin],
  data() {
    return {
      radios: "",
    };
  },
  methods: {
    aoClicar(item) {
      this.radios = item.value;
      eventBus.$emit("novoPlaceholder", this.radios);
    },
    update() {
      this.$http.get(`form`).then((component) => {
        console.log(component);
      });
    },
  },
};
</script>