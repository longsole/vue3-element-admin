<template>
  <div>this is login page state {{ this.$store.state.user.name }}</div>
  <div>this is login page getters {{ userName }}</div>
  <div>this is login page getters {{ this.$store.getters.userName }}</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

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
