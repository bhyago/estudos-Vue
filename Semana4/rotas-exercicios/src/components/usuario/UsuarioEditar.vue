<template>
  <div class="usuario-editar">
    <h3>Usuario editar</h3>
    <p>
      <strong>Código:</strong>
      {{ id }}
    </p>
    <p>
      <strong>Codigo:</strong>
      {{ $route.params.id }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>
<style>
</style>