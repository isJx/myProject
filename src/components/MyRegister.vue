<template>
  <div>
    <el-dialog title="注册" width="300px" center :visible.sync="isRegister">
      <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" class="demo-ruleForm">
        <el-form-item prop="user">
          <el-input v-model.number="ruleForm.user" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            size="medium"
            type="primary"
            style="width: 100%"
            @click="submitForm('ruleForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      let regexp = /^[a-zA-Z0-9_]{4,15}$/;
      if (!regexp.test(value)) {
        return callback(new Error("用户名不合法"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.ruleForm.pass, this.ruleForm.checkPass, this.ruleForm.user);
        this.axios
          .get("/api/register", {
            params: {
              uname: this.ruleForm.user,
              upwd: this.ruleForm.pass,
            },
          })
          .then((res) => {
            if (res.data == 1) {
              this.$store.commit("isRegister", false);
              this.$message({
                message: "恭喜你,注册成功!",
                type: "success",
              });
            } else {
              this.$message.error("该用户已存在");
            }
          });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    isRegister: {
      get() {
        return this.$store.getters.getIsRegister;
      },
      set() {
        this.$store.commit("isRegister", false);
        (this.user = ""), (this.upwd = ""), (this.upwdTwo = "");
      },
    },
  },
};
</script>
