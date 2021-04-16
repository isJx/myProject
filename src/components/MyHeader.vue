<template>
  <div>
    <div id="nav">
      <ul>
        <li v-if="this.$store.state.user.userState == 0">
          <el-button type="text" @click="isLogin(true)">登录</el-button>
          <el-button type="text" @click="isRegister(true)">注册</el-button>
        </li>
        <li v-else class="one">
          <el-button type="text"
            >欢迎<span style="color: orange">
              {{ this.$store.state.user.userMsg.uname }}</span
            ></el-button
          >
          <el-button type="text" @click="logout">注销</el-button>
        </li>
        <li>
          <el-button type="text">我的订单</el-button>
        </li>
        <li>
          <el-button type="text" @click="toFavorite"> 我的收藏 </el-button>
        </li>
        <li>
          <el-button
            @click="goCart"
            type="text"
            style="
              background-color: #ff6700;
              color: white;
              padding-left: 8px;
              padding-right: 8px;
              border-radius: 0;
            "
            class="el-icon-shopping-cart-full"
          >
            <span>购物车</span>
            <!-- <span></span> -->
          </el-button>
        </li>
      </ul>
    </div>
    <div id="box">
      <div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          active-text-color="#409eff"
          mode="horizontal"
          router
        >
          <el-menu-item style="margin-right: 20px">
            <img src="../assets/imgs_q/logo.png" />
          </el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/product">全部商品</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item style="padding-left: 370px">
            <el-input placeholder="请输入内容"></el-input>
            <el-button class="el-icon-search"></el-button>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "", // 导航栏默认定位
    };
  },
  methods: {
    isLogin(payload) {
      this.$store.commit("isLogin", payload);
    },
    isRegister(payload) {
      this.$store.commit("isRegister", payload);
    },
    // 注销用户的函数
    logout() {
      this.$confirm("确定要退出登录吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          window.sessionStorage.clear();
          this.$store.commit("logout");
          this.$message({
            type: "success",
            message: "已退出登录!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    // 进入购物车
    goCart() {
      if (this.$store.state.user.userState == 0) {
        this.$store.commit("isLogin", true);
      } else {
        this.$router.push(`/cart/${this.$store.state.user.userMsg.uid}`);
      }
    },
    // 进入收藏页
    toFavorite() {
      if (this.$store.state.user.userState == 0) {
        this.$store.commit("isLogin", true);
      } else {
        this.$router.push(`/favorite/${this.$store.state.user.userMsg.uid}`);
      }
    },
  },
  created() {
    this.activeIndex = this.$route.path;
  },
};
</script>

<style scoped>
#box {
  width: 1200px;
  margin: 0 auto;
}
#nav {
  height: 40px;
  background-color: #666;
}
#nav > ul {
  float: right;
  padding-right: 90px;
  margin: 0px;
}
#nav > ul > li {
  float: left;
  list-style: none;
  line-height: 40px;
}
#nav > ul > li:not(.one) {
  margin-left: 20px;
}
.one {
  margin-left: 5px;
}
#nav > ul > li > a,
#nav > ul > li > button {
  display: inline-block;
  height: 100% !important;
  color: rgb(211, 202, 202);
  text-decoration: none;
  font-size: 14px;
}
#nav > ul > li > a:hover,
#nav > ul > li > button:hover {
  color: white;
}
</style>
