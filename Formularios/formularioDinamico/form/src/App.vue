<template>
  <v-app>
    <v-main>
      <v-row
        align="center"
        justify="center"
        class="grey lighten-5"
        style="height: 100%"
      >
        <v-card width="700px">
          <!-- <InputText /> -->
          <component :is="teste"></component>
          <!-- <FormDinamico /> -->
        </v-card>
      </v-row>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import FormDinamico from "./components/FormDinamico";
export default {
  components: {
    FormDinamico,
  },
  computed: {
    teste: function () {
      return FormDinamico;
    },
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
