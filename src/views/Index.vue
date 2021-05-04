<template>
  <div class="index">
    <MyHeader></MyHeader>
    <Login></Login>
    <MyRegister></MyRegister>
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
          <el-col :span="18" style="height: 701px">
            <div class="box">
              <ul class="ul">
                <li v-for="(item, i) of product.phone" :key="i" class="li">
                  <a href="javascript:;" class="a" @click="tiao(item.product_id)">
                    <img :src="require(`../assets/${item.product_picture}`)" />
                    <p class="name">{{ item.product_name }}</p>
                    <p class="title">{{ item.product_title }}</p>
                    <p class="price">{{ item.product_price }} 元</p>
                  </a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <p style="font-size: 26px">电器</p>
        <el-row :gutter="10">
          <!-- 左边部分 -->
          <el-col :span="6">
            <el-card>
              <a href="javascript:;">
                <img src="../assets/imgs/appliance/appliance-promo1.png" />
                <img src="../assets/imgs/appliance/appliance-promo2.png" />
              </a>
            </el-card>
          </el-col>
          <!-- 右边部分 -->
          <el-col :span="18" style="height: 701px">
            <div class="box">
              <ul class="ul">
                <li v-for="(item, i) of product.houseapp" :key="i" class="li">
                  <a href="javascript:;" class="a" @click="tiao(item.product_id)">
                    <img :src="require(`../assets/${item.product_picture}`)" />
                    <p class="name">{{ item.product_name }}</p>
                    <p class="title">{{ item.product_title }}</p>
                    <p class="price">{{ item.product_price }} 元</p>
                  </a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
import MyRegister from "../components/MyRegister";
import Login from "../components/AlertInput";
export default {
  components: { MyHeader, Footer, MyRegister, Login },
  data() {
    return {
      // 轮播图间隔:毫秒
      interval: 3000,
      // 轮播图
      carousel: [],
      product: {
        phone: [],
        houseapp: [],
      },
      phone: [], // 手机商品
    };
  },
  methods: {
    tiao(pid) {
      this.$router.push(`/details/${pid}`);
    },
  },
  mounted() {
    this.axios.get("/api/car").then((res) => {
      this.carousel = res.data;
    });
    this.axios.get("/api/product").then((res) => {
      console.log(`向/product发送了一次请求`);
      let temp = res.data;
      temp.forEach((item) => {
        // 循环出手机商品, 存入数组中
        if (item.category_id == 1) {
          // this.phone.push(item);
          this.product.phone.push(item);
        }
        // 循环出电器, 存入数组
        if (item.category_id == 4 || item.category_id == 3 || item.category_id == 2) {
          if (this.product.houseapp.length < 8) {
            this.product.houseapp.push(item);
          }
        }
      });
    });
  },
};
</script>

<style>
.index .box {
  width: 897px;
}
.index .ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.index .li {
  float: left;
  width: 208px;
  height: 330px;
  /* background-color: aqua; */
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(216, 211, 211);
  transition: all 0.3s;
}
.index .li p {
  margin: 0px;
}
.index .li:hover {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.index .a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
.index .a img {
  width: 87%;
  margin-top: 10px;
}
.index .name {
  color: black;
  font-size: 15px;
  padding-top: 15px;
  padding-bottom: 12px;
  width: 180px;
  text-align: center;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index .title {
  color: #646464;
  font-size: 13px;
  padding-bottom: 15px;
}
.index .price {
  color: #ff6700;
  font-size: 18px;
}
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
