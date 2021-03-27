<template>
  <div>
    <my-header> </my-header>
    <alert-input></alert-input>
    <my-register></my-register>
    <div class="details">
      <div>
        <p style="font-size: 20px; margin: 20px; display: inline-block">{{ data.product_name }}</p>
        <ul class="user">
          <li>概述</li>
          <li>参数</li>
          <li>用户评价</li>
        </ul>
      </div>
      <!-- ------------------------------------------------------------ -->
    </div>
    <div class="title"></div>
    <div class="details">
      <el-row>
        <!-- 左侧轮播图 -->
        <el-col :span="11" style="padding: 20px">
          <div class="block">
            <span class="demonstration"></span>
            <el-carousel height="510px">
              <el-carousel-item v-for="(item, i) in details" :key="i">
                <h3 class="small">
                  <img
                    style="width: 100%"
                    :src="require(`../assets/${item.product_picture}`)"
                    alt=""
                  />
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="13">
          <p class="title_right">{{ data.product_name }}</p>
          <p class="intro">{{ data.product_intro }}</p>
          <p class="mi">小米自营</p>
          <p class="price">{{ data.product_price }} 元</p>
          <p style="border-bottom: 1px solid #e7d7d7; margin: 30px 0px"></p>
          <div class="little">
            <div class="red">
              {{ data.product_name }}
              <span>{{ data.product_price }} 元</span>
            </div>
            <div class="total">总计: {{ data.product_price }} 元</div>
          </div>
          <!-- 收藏 加购 -->
          <div>
            <el-button class="btn-left" @click="addCart(data.product_id)">加入购物车</el-button>
            <el-button class="btn-right" @click="addFavorite(data.product_id)">喜欢</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AlertInput from "../components/AlertInput.vue";
import MyRegister from "../components/MyRegister.vue";
export default {
  components: { AlertInput, MyRegister },
  props: ["pid"],
  data() {
    return {
      details: [],
      data: {},
    };
  },
  methods: {
    // 加入购物车
    addCart(pid) {
      // 加购前判断是否登录, 如果已登录则执行if语句
      if (this.$store.state.user.userState == 1) {
        let uid = this.$store.state.user.userMsg.uid;
        console.log("用户id" + uid, "商品id" + pid);
        this.axios
          .get("/api/addcart", {
            params: {
              uid: uid,
              pid: pid,
            },
          })
          .then((res) => {
            if (res.data == 1) {
              this.$message({
                type: "success",
                message: "已加入购物车!",
              });
            } else {
              this.$message({
                type: "warning",
                message: "加入购物车失败!",
              });
            }
          });
      } else {
        // 如果没有登陆, 则执行else
        this.$alert("您还没有登录, 请先登录", "标题", {
          confirmButtonText: "确定",
          callback: () => {
            this.$store.commit("isLogin", true);
          },
        });
      }
    },
    addFavorite(pid) {
      let uid = this.$store.state.user.userMsg.uid;
      if (this.$store.state.user.userState == 1) {
        this.axios
          .get("/api/addfavorite", {
            params: {
              uid: uid,
              pid: pid,
            },
          })
          .then((res) => {
            if (res.data == 1) {
              this.$message({
                type: "success",
                message: "已加入收藏夹!",
              });
            } else {
              this.$message.error("请勿重复添加");
            }
          });
      } else {
        this.$alert("您还没登录,请先登录!", "提示", {
          confirmButtonText: "确定",
        });
      }
    },
  },
  mounted() {
    // 请求商品轮播图图片
    this.axios
      .get("/api/details", {
        params: {
          pid: this.pid,
        },
      })
      .then((res) => {
        // console.log(res.data); // 测试
        // 使用三目,保证details里永远存储轮播图的图片
        // this.details = Array.isArray(res.data[0]) ? res.data[0] : res.data[1];
        // this.data = Array.isArray(res.data[0]) ? res.data[1] : res.data[0];
        this.details = res.data[0];
        this.data = res.data[1];
      });
  },
};
</script>

<style scoped>
.details {
  width: 1200px;
  margin: 0 auto;
}
.title {
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
}
.user {
  float: right;
  margin: 0px;
  padding: 0px;
}
.user > li {
  float: left;
  list-style: none;
  margin: 0px 10px;
  line-height: 65px;
}
.user > li:hover {
  color: #ff6700;
  cursor: pointer;
}

/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 轮播图 */
.title_right {
  font-size: 24px;
  margin-bottom: 16px;
}
.intro {
  font-size: 16px;
  color: #999;
  margin-top: 0px;
}
.mi {
  color: #ff6700;
}
.price {
  font-size: 18px;
  color: #ff6700;
}
.little {
  background-color: #eaeaee;
  padding-left: 60px;
  padding-top: 30px;
  border-radius: 4px;
}
.little > div {
  background-color: #eaeaee;
  width: 100%;
  height: 100%;
}
.red {
  color: #475669;
}
.red > span {
  float: right;
  padding-right: 50px;
}
.total {
  font-size: 24px;
  color: #ff6700;
  margin-top: 30px;
  padding-bottom: 30px;
  border-radius: 4px;
}
.btn-left {
  width: 350px;
  height: 55px;
  background-color: #ff6700;
  color: white;
  font-size: 17px;
  margin-top: 40px;
  margin-right: 50px;
}
.btn-left:hover {
  background-color: #f25807;
  color: white;
}
.btn-right {
  width: 240px;
  height: 55px;
  background-color: #b0b0b0;
  color: white;
  font-size: 17px;
}
.btn-right:hover {
  color: white;
  background-color: #757575;
}
</style>
