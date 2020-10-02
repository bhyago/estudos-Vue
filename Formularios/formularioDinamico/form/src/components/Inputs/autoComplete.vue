<template>
  <v-autocomplete
    v-model="country"
    label="Country"
    placeholder="Select..."
    required
    auto-select-first
    chips
    clearable
    deletable-chips
    dense
    filled
    multiple
    rounded
    small-chips
    solo
    solo-inverted
  ></v-autocomplete>
</template>
<script>
export default {
  props: {
    formulario: Object,
  },
};
</script>