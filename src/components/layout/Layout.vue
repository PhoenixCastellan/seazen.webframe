<template>
  <div class="layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header style="padding: 0"> <Header /></el-header>
        <el-main style="padding: 0"><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Main from "./Main.vue";
export default {
  components: {
    Header,
    Aside,
    Main,
  },
};
</script>

<style>
</style>