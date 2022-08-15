<template>
  <div>{{ $t('message') }}</div>
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
