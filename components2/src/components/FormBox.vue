<template>
  <div>
    <b-message :title="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet,
      elit sapien laoreet elit
    </b-message>
  </div>
</template>
<script>
export default {
  name: 'FormBox',
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>