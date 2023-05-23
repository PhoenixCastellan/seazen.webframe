<template>
  <div class="error_page flex flex-center flex-align-center">
   <div>
      <i class="iconfont icon-icon-test error"></i>
      <p class="tip_txt">sorry 您访问的页面可能丢失了</p>
   </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.error_page {
  height: 100%;
  .error {
    font-size: 20rem;
    color: #557575;
  }
  .tip_txt{
    text-align: center;
    padding: 20px;
    color: #999;
  }
}
</style>