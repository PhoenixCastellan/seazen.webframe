<template>
  <div class="layout_header flex flex-align-center flex-end">
    <div>
      <el-dropdown class="logIn_out" :hide-on-click="true" v-if="userInfo">
        <span class="el-dropdown-link">
          <div class="flex flex-align-center">
            <Avatar :src="userInfo.userPhoto" v-if="userInfo.userPhoto" />
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled icon="el-icon-user">{{ userInfo.userName }} </el-dropdown-item>
          <el-dropdown-item @click="logOut" ><i class="iconfont icon-sign_out"></i> 退出 </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Avatar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  methods: {
    logOut() {
      window.location.href = `${
        process.env.VUE_APP_LOGIN_SITE
      }?RetutnUrl=${encodeURIComponent(window.location.href)}`;
    },
  },
};
</script>

<style lang="less">
.layout_header {
  height: 60px;
  width: 100%;
  background: @mainColor;
  padding: 0 24px 0 0 !important;
  .logIn_out {
    color: #fff !important;
    .iconfont {
      vertical-align: middle;
    }
  }
}
.el-dropdown-menu__item{
  &:hover{
       background: rgba(78, 150, 54, 0.1) !important;
       color: @mainColor!important;
  }
}
</style>