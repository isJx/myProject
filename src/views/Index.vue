<template>
  <div>
    <my-header></my-header>
    <alert-input></alert-input>
    <div style="margin-top: 20px"></div>
    <div id="box">
      <!-- 轮播图 -->
      <div class="block" height="527px">
        <span class="demonstration"></span>
        <el-carousel trigger="click" :interval="interval" height="450px">
          <el-carousel-item v-for="(item, index) in carousel" :key="index">
            <h3 class="small">
              <img width="100%" :src="require(`../${item.car_name}`)" />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p style="font-size: 26px">手机</p>
        <el-row :gutter="10">
          <!-- 左边部分 -->
          <el-col :span="6">
            <el-card>
              <a href="javascript:;">
                <img style="width: 100%" src="../assets/imgs/phone/phone.png" />
              </a>
            </el-card>
          </el-col>
          <!-- 右边部分 -->
          <el-col :span="18">
            <el-row :gutter="15">
              <el-col :span="6" v-for="(item, index) in phone" :key="index">
                <el-card shadow="hover" :body-style="{ textAlign: 'center' }">
                  <a class="card-a" href="javascript:;">
                    <img style="width: 100%" :src="require(`../assets/${item.product_picture}`)" />
                    <div style="padding: 8px">
                      <p class="card-name">{{ item.product_name }}</p>
                      <p class="card-title">{{ item.product_title }}</p>
                      <p class="card-price">{{ item.product_price }} 元</p>
                    </div>
                  </a>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
// import AlertInput from "../components/AlertInput.vue";
export default {
  // components: { AlertInput },
  data() {
    return {
      // 轮播图间隔:毫秒
      interval: 3000,
      // 轮播图
      carousel: [],
      phone: [], // 手机商品
    };
  },
  mounted() {
    this.axios.get("/api/car").then((res) => {
      this.carousel = res.data;
    });
    this.axios.get("/api/product").then((res) => {
      let temp = res.data;
      temp.forEach((item) => {
        if (item.category_id == 1) {
          this.phone.push(item);
        }
      });
    });
  },
};
</script>

<style>
#box {
  width: 1200px;
  margin: 0 auto;
}
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

.card-a {
  text-decoration: none;
  text-align: center;
}
.card-name {
  color: black;
  margin: 4px;
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
