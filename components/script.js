Vue.component('money', {
  props: ['value', 'prefix', 'showColor'],
  templete: '<span :class="className">{{prefix}} {{formatedValue}}</span>',
  computed: {
    formatedValue: function() {
      numbro.culture('pt-BR');
      return numbro(this.value).format('0[.]0');
    }
  },
  className: function() {
    if(!this.showColor) {
      return ''
    }

    if (this.value > 0) {
      return 'is-positive';
    }

    else if (this.value < 0) {
      return 'is-negtive';
    }

    return 'is-neutral'
  },
});

let app = new Vue ({
  el: '#app',
  data: {
    
  },
})