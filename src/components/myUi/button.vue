<template>
  <button :class="['my-btn', type]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style lang="less" scoped>
.my-btn {
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 16px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  color: #535353;
  margin: 0 5px;
  &[round]{
      border-radius: 20px;
  }
  &[plain] {
      color: #535353;
      border-color: #d3d3d3;
      background-color: #fff;
      &:hover {
        background-color: #fff;
        border-color: #6495ed;
        color: #6495ed;
      }
    }
  &:hover {
    color: #6495ed;
    border-color: #6495ed;
    background-color: #f4f7fd;
  }
  &.primary {
    background-color: #6495ed;
    border-color: #6495ed;
    color: #fff;
    &:hover {
      border-color: #8eb2f5;
      background-color: #8eb2f5;
    }
    &[plain] {
      color: #6495ed;
      border-color: #6495ed;
      background-color: #f4f7fd;
      &:hover {
        background-color: #6495ed;
        border-color: #6495ed;
        color: #fff;
      }
    }
  }
  &.success {
    background-color: #7ccd7c;
    border-color: #7ccd7c;
    color: #fff;
    &:hover {
      border-color: #99e999;
      background-color: #99e999;
    }
    &[plain] {
      color: #7ccd7c;
      border-color: #7ccd7c;
      background-color: #f4fcf4;
      &:hover {
        background-color: #7ccd7c;
        border-color: #7ccd7c;
        color: #fff;
      }
    }
  }
  &.warning {
    background-color: #eead0e;
    border-color: #eead0e;
    color: #fff;
    &:hover {
      border-color: #fdc025;
      background-color: #fdc025;
    }
    &[plain] {
      color: #fdc025;
      border-color: #fdc025;
      background-color: #f8f1e1;
      &:hover {
        background-color: #fdc025;
        border-color: #fdc025;
        color: #fff;
      }
    }
  }
  &.danger {
    background-color: #ee4000;
    border-color: #ee4000;
    color: #fff;
    &:hover {
      border-color: #ff652d;
      background-color: #ff652d;
    }
     &[plain] {
      color: #ff652d;
      border-color: #ff652d;
      background-color: #ffe3d9;
      &:hover {
        background-color: #ff652d;
        border-color: #ff652d;
        color: #fff;
      }
    }
  }
}
</style>