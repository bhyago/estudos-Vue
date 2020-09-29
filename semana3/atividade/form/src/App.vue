<template>
  <v-app>
    <v-main>
      <v-row align="center" justify="center" class="grey lighten-5" style="height: 100%;">
        <v-card width="700px">
          <!-- <InputText /> -->
          <FormDinamico />
        </v-card>
      </v-row>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import FormDinamico from "./components/FormDinamico";
// import InputText from "./components/Inputs/InputText";
export default {
  components: {
    // InputText,
    FormDinamico,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
