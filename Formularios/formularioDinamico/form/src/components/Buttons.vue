<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(item, id) in formulario" :key="id" :align="item.align">
        <v-btn
          :class="item.textAlign"
          :fab="item.fab"
          :x-small="item.xsmall"
          :small="item.small"
          :large="item.large"
          :x-large="item.xlarge"
          :color="item.color"
          :dark="item.dark"
          :outlined="item.outlined"
          :rounded="item.rounded"
          :tile="item.tile"
          :block="item.block"
        >
          <v-icon v-if="item.icon">{{item.imageIcon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["formulario"],
  data() {
    return {
      itensButtons: [],
    };
  },
  // created() {
  //   this.$http.get("buttons").then((res) => {
  //     this.itensButtons = res.data;
  //     console.log(this.buttons);
  //   });
  // },
};
</script>