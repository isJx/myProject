<template>
  <div>
    <my-header></my-header>
    <alert-input></alert-input>
    <div id="box">
      <div id="bre">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item style="font-size: 16px" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 16px">全部商品</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 16px">分类</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <!-- 卡片开始 -->
            <el-row>
              <el-col
                :span="4"
                v-for="(item, index) of product"
                :key="index"
                style="margin: 10px 20px"
              >
                <el-card :body-style="{ textAlign: 'center' }" shadow="hover">
                  <a class="card-a" href="javascript:;" @click="details(item.product_id)">
                    <img style="width: 100%" :src="require(`../assets/${item.product_picture}`)" />
                    <div style="padding: 8px">
                      <span class="card-name">{{ item.product_name }}</span>
                      <p class="card-title">{{ item.product_title }}</p>
                      <p class="card-price">{{ item.product_price }} 元</p>
                    </div>
                  </a>
                </el-card>
              </el-col>
            </el-row>
            <!-- 卡片结束 -->
          </el-tab-pane>
          <el-tab-pane label="手机" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="电视机" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="空调" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
// import AlertInput from "../components/AlertInput.vue";
// import MyHeader from "../components/MyHeader.vue";
export default {
  // components: { AlertInput, MyHeader },
  data() {
    return {
      activeName: "first",
      // category_id: 1
      // product_id: 1
      // product_intro: "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC"
      // product_name: "Redmi K30"
      // product_num: 10
      // product_picture: "public/imgs/phone/Redmi-k30.png"
      // product_price: 2000
      // product_sales: 0
      // product_selling_price: 1599
      // product_title: "120Hz流速屏，全速热爱"
      product: [], // 保存请求到的商品
    };
  },
  methods: {
    handleClick(event) {
      console.log(event);
    },
    details(pid) {
      this.$router.push(`/details/${pid}`);
    },
  },
  mounted() {
    this.axios.get("/api/product").then((res) => {
      this.product = res.data;
    });
  },
};
</script>

<style scoped>
#box {
  width: 1200px;
  margin: 0 auto;
}
#bre {
  padding-top: 20px;
  margin-bottom: 20px;
}
/* 卡片 */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.card-a {
  text-decoration: none;
}
.card-name {
  color: black;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-title {
  color: #999;
  margin: 4px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  overflow: hidden;
}
.card-price {
  color: #ff7600;
  margin: 7px;
  font-size: 16px;
}
</style>
