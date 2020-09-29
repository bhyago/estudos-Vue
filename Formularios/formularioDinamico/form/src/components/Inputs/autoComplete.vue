<template>
  <v-autocomplete
    v-if="item.autocomplete"
    v-model="country"
    :rules="[() => !!country || 'This field is required']"
    :items="countries"
    label="Country"
    placeholder="Select..."
    required
  ></v-autocomplete>
</template>
<script>
export default {};
</script>