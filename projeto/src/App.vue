<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view>
          <!-- <SignIn /> -->
          <Header />
        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import SignIn from "./components/SignIn";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    // SignIn,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
