<template>
  <div id="myLogin">
    <el-dialog title="登录" width="300px" center :visible.sync="isLogin">
      <el-form status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            v-model="loginUser.uname"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请输入密码"
            v-model="loginUser.upwd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="login" style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoign: false,
      // 保存登录用户的账号密码
      loginUser: {
        uname: "",
        upwd: "",
      },
    };
  },
  methods: {
    login() {
      this.axios
        .get("/api/login", {
          params: {
            uname: this.loginUser.uname,
            upwd: this.loginUser.upwd,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.msg == "ok") {
            let temp = JSON.stringify(res.data.result);
            window.sessionStorage.setItem("user", temp); // 把登录信息存入session
            this.$store.commit("userState", res.data.result); // 把登录信息存储到vuex
            this.$store.commit("isLogin", false); // 关闭登录窗口
          }
        });
    },
  },
  computed: {
    isLogin: {
      get() {
        return this.$store.getters.getShowLogin;
      },
      set() {
        this.$store.commit("isLogin", false);
      },
    },
  },
};
</script>
