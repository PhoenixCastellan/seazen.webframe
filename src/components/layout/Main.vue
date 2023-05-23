<template>
  <div class="layout_main">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
  .layout_main {
    height: calc(100vh - 60px);
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>