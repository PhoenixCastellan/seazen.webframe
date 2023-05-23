<template>
  <div class="avatar">
    <img :src="src" />
  </div>
</template>

<script>
export default {
    props:['src']
};
</script>

<style lang="less">
.avatar {
  background: #fff;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>