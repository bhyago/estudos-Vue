<template>
  <div class="layout-content ma-auto w-full">
    <v-card class="text-center pa-1 v-sheet theme--light mx-auto" max-width="500">
      <div class="v-card__title justify-center display-1 mb-12">Bem vindo</div>
      <div class="v-card__subtitle">Sign in to your accont</div>
      <div class="v-card__text">
        <v-form>
          <v-text-field label="usuário" outlined></v-text-field>
          <v-text-field label="senha" outlined></v-text-field>

          <v-btn
            x-large
            color="sucess"
            class="v-btn--block v-btn-contained mb-2 v-size--x--large primary"
          >entrar</v-btn>
        </v-form>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>