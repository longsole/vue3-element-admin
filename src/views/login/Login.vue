<template>
  <div class="login-state">this is login page state {{ this.$store.state.user.name }}</div>
  <div>this is login page getters {{ userName }}</div>
  <div>this is login page getters {{ this.$store.getters.userName }}</div>
  <div class="sass">
    <div class="span">saass span</div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import './login.scss';

export default {
  setup() {
    const store = useStore();
    const userName = computed(() => store.getters['user/userName']);
    return {
      userName,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-state {
  color: red;
}
// .sass {
//   .span {
//     color: aquamarine;
//   }
// }
</style>
>
