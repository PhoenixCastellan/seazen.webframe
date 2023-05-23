<template>
  <el-aside
    class="layout_aside"
    :class="{ unfold: !isCollapse, fold: isCollapse }"
  >
    <div class="logoWrap">
      <div
        class="logo flex flex-align-center flex-center"
        :class="{ mini: isCollapse, normal: !isCollapse && notFirst }"
      >
        <img src="../../assets/img/logo.png" />
        <i
          class="collapesCtr"
          :class="{
            'el-icon-s-fold': !isCollapse,
            'el-icon-s-unfold': isCollapse,
          }"
          @click="isCollapse = !isCollapse;notFirst=true"
        ></i>
      </div>
    </div>
    <div class="menueWrap">
      <el-menu
        class="el-menu-vertical-demo aside_menue"
        :collapse="isCollapse"
        router
        :unique-opened="true"
        background-color="#fff"
        :default-active="$route.path"
      >
        <!-- 由于导航栏数据异步加载，层级不固定  递归调用  menun内部递归 整个menu递归会有多个高亮bug -->
        <MenuList
          class="myMenu"
          :list="list"
        />
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
import MenuList from "@/components/MenuList";
export default {
  components: {
    MenuList,
  },

  data () {
    return {
      notFirst: false,
      isCollapse: false,
      list: [
        {
          id: "1",
          path: "/",
          name: "投票 / 活动",
          icon: "icon-home",
        },
        {
          id: "2",
          path: "/myUi",
          name: "自定义ui",
          icon: "icon-iconfont10",
        },
        {
          id: "3",
          path: "/personal",
          name: "个人中心",
          icon: "icon-Personal",
        }
      ],
    };
  },

};
</script>
<style lang="less" >
.layout_aside {
  overflow: visible !important;
  position: relative;
  height: calc(100vh);
  padding: 0;
  background: #fff;
  &.fold {
    width: auto !important;
    .logo {
      img {
        height: 30%;
      }
    }
  }
  &.unfold {
    width: auto !important;
    .logo {
      img {
        height: 60%;
      }
    }
  }
  .logoWrap {
    background: @mainColor;
    .logo {
      width: 100%;
      height: 60px;
      position: relative;
      &.mini {
        position: relative;
        animation: scaleLogo 300ms forwards;
        img {
          animation: scaleLogo2 300ms forwards;
        }
      }
      &.normal {
        animation: scaleLogo3 300ms forwards;
        img {
          animation: scaleLogo4 300ms forwards;
        }
      }
      .collapesCtr {
        position: absolute;
        top: 50%;
        right: -26px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transform: translateY(-50%);
      }
    }
  }
  .menueWrap {
    height: calc(100vh - 60px);
    overflow-y: auto;
    overflow-x: hidden;
  }
}

//解决收缩开盾
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px; //宽度自己掌握
  height: 100%;
}
.el-submenu__title {
  .el-submenu__icon-arrow {
    font-size: 16px !important;
  }
}
.el-submenu__title,
.el-submenu .el-menu-item,
.el-menu-item,
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
  i {
    font-size: 18px;
    padding-right: 10px;
  }
}

@keyframes scaleLogo {
  from {
    width: 220px;
  }
  to {
    width: 65px;
  }
}
@-webkit-keyframes scaleLogo {
  from {
    width: 220px;
  }
  to {
    width: 65px;
  }
}
@keyframes scaleLogo2 {
  from {
    height: 60%;
  }
  to {
    height: 30%;
  }
}
@-webkit-keyframes scaleLogo2 {
  from {
    height: 60%;
  }
  to {
    height: 30%;
  }
}
@keyframes scaleLogo3 {
  from {
    width: 65px;
  }
  to {
    width: 220px;
  }
}
@keyframes scaleLogo4 {
  from {
    height: 30%;
  }
  to {
    height: 60%;
  }
}
</style>
