<template>
  <v-container>
    <v-row>
      <v-col cols="1" v-for="(item, id) in radioButton" :key="id">
        <v-radio-group v-model="radios" :cols="item.column" :row="item.row" :column="item.column">
          <v-radio :label="item.label" :value="item.value" :color="item.color" />
        </v-radio-group>
      </v-col>
      <v-col class="ml-3" cols="4">
        <v-text-field :placeholder="radios"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      label: "cpf",
      radios: "",
      radioButton: [],
    };
  },
  created() {
    this.$http.get("radioButtons").then((res) => {
      this.radioButton = res.data;
      console.log(this.radioButton);
    });
  },
};
</script>