<template >
  <div class="memuWrap">
    <template :index="item.id" v-for="item in list">
      <template v-if="item.children">
        <el-submenu :index="item.path" :key="item.id">
          <template slot="title">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <menu-list
            class="myMenu"
            :list="item.children"
            :isChild="true"
          ></menu-list>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path" :key="item.id">
          <i class="iconfont" :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "MenuList",
  props: {
    list: {
      type: Array,
      default: [],
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">

.el-menu--collapse {
  .el-submenu__icon-arrow {
    display: none;
  }
  .el-submenu__title span {
    width: 0;
  }
}
.el-menu--collapse .el-submenu__title span,
.el-menu--collapse .el-menu-item span {
  width: 0;
  display: none;
}
.el-menu {
  border-right: none !important;
}
.el-menu-item,
.el-submenu__title {
  color: #0d2134 !important;
  font-size: 14px !important;

  &:hover {
    background: #ecf5ff!important;
    color:  @mainColor!important;
    .iconfont {
    color:  @mainColor!important;
    }
  }
  &.is-active {
    background: #ecf5ff!important;
    color:  @mainColor !important;
  }
}
.el-menu-item,
.el-submenu__title {
  .iconfont {
    padding-right: 8px;
  }
}
</style>



