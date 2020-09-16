<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view>
          <SignIn />
        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SignIn from "./components/SignIn";

export default {
  name: "App",

  components: {
    SignIn,
  },

  data: () => ({
    //
  }),
};
</script>
