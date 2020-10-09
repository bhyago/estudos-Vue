// import eventBus from "@/eventBus";
export default {
  props: {
    formulario: {
      type: Object,
    }
  },
  methods: {
    functionJson(func) {
      eval(func);
    },
  },
}