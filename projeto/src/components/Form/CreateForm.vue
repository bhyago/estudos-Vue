<template>
  <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Radio 1" value="radio"></v-radio>
      <v-radio label="Radio 2" value="radio-2"></v-radio>
    </v-radio-group>
    <v-text-field label="usuário" outlined></v-text-field>
    <v-text-field label="senha" outlined></v-text-field>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      radios: "",
    };
  },
};
</script>
<style scoped>
</style>