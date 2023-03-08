<template>
  <div>{{ $t('message') }}</div>
  <div class="app">app console</div>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup() {},
};
</script>
<style scoped>
.app {
  color: yellow;
}
</style>
>
