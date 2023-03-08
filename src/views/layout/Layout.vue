<template>
  <div>main content ...</div>
  <el-button @click="login">login</el-button>>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Login from '../login/Login.vue';

export default {
  components: [Login],
  setup() {
    const login = () => {
      console.log(Login);
    };

    return { login };
  },
};
</script>
