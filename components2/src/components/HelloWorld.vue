<template>
  <div>
    Hello World
    <form-box></form-box>
  </div>
</template>

<script>
import FormBox from './FormBox.vue'
export default {
  name: 'HelloWorld',
  components: {
    FormBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>