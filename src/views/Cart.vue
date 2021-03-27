<template>
  <div>
    <my-header></my-header>
    <div class="cart">
      <div class="cartnav">
        <div>
          <img style="width: 36px" src="../assets/cart.png" alt="" />
          我的购物车
        </div>
        <span style="color: #757575">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </div>
    </div>
    <hr />
    <div v-if="this.shopObj.length > 0" class="cart box">
      <ul class="cart-ul">
        <li class="cart-li">
          <div><el-checkbox>全选</el-checkbox></div>
          <div><p>商品名称</p></div>
          <div><p>单价</p></div>
          <div><p>数量</p></div>
          <div><p>小计</p></div>
          <div><p>操作</p></div>
        </li>
        <!-- 循环遍历购物车 -->
        <li class="item" v-for="(item, i) in shopObj" :key="i">
          <div>
            <input type="checkbox" @click="check(item.product_price * item.pcount)" />
            <span
              style="
                background-color: pink;
                width: 90px;
                height: 90px;
                float: right;
                margin-right: 10px;
                margin-top: 5px;
              "
            >
              <img style="width: 100%" :src="require(`../assets/${item.product_picture}`)" alt="" />
            </span>
          </div>
          <div>
            <p>{{ item.product_name }}</p>
          </div>
          <div>
            <p>{{ item.product_price }} 元</p>
          </div>
          <div>
            <el-input-number
              v-model="item.pcount"
              @change="handleChange($event, item.cid)"
              :min="1"
              :max="10"
              label="描述文字"
              size="small"
            ></el-input-number>
          </div>
          <div>
            <p style="color: #ff6700">{{ item.product_price * item.pcount }}元</p>
          </div>
          <div>
            <p>
              <el-button
                type="info"
                icon="el-icon-close"
                circle
                size="mini"
                @click="del(item.cid)"
              ></el-button>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="ifels">
      <div>
        <img src="../assets/imgs_q/cart-empty.png" alt="" />
      </div>
      <div style="background-color: #f7f7f7">
        <h1>您的购物车还是空的!</h1>
        <p></p>
        <h2>快去购物吧</h2>
      </div>
    </div>
    <div class="goto">
      <a href="javascript:;" @click="goToIndex">继续购物</a>
      <p class="kkk">
        共 <span>{{ this.shopObj.length }}</span> 件商品，已选择 <span>0</span> 件
      </p>
      <p class="price">合计: <span>0元</span></p>
      <button class="btn">去结算</button>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  props: ["uid"],
  data() {
    return {
      shopObj: [], // 商品列表
      antiShake: 1,
    };
  },
  methods: {
    check(val) {
      console.log(val);
    },
    // 修改购物车商品件数
    handleChange($event, cid) {
      if (this.antiShake == 1) {
        this.antiShake = 0;
        this.axios
          .get("/api/upd", {
            params: {
              cid: cid,
              count: $event,
            },
          })
          .then((res) => {
            console.log(res.data);
            this.antiShake = res.data;
          });
      }
    },
    // 删除商品
    del(cid) {
      console.log(cid);
      this.axios
        .get("/api/del", {
          params: {
            cid: cid,
          },
        })
        .then((res) => {
          if (res.data == 1) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          } else {
            this.$message({
              type: "warning",
              message: "删除失败",
            });
          }
          setTimeout(() => {
            this.$router.go(0);
          }, 1000);
        });
    },
    goToIndex() {
      this.$router.push("/product");
    },
  },
  // 页面创建时计算购物车商品的价格
  created() {
    // 发送请求,查看该用户购物车的内容
    this.axios
      .get("/api/setcart", {
        params: {
          uid: this.uid,
        },
      })
      .then((res) => {
        this.shopObj = res.data;
        console.log(this.shopObj);
      });
  },
};
</script>

<style scoped>
.ifels {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}
.price {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 560px;
  font-size: 14px;
  color: #ff6700;
}
.price > span {
  font-size: 30px;
  line-height: 60px;
}
.btn {
  float: right;
  display: inline-block;
  width: 180px;
  outline: none;
  background-color: #666;
  color: white;
  font-size: 20px;
  border: 0;
  height: 60px;
  cursor: pointer;
}
.goto {
  height: 60px;
  width: 1200px;
  margin: 15px auto;
  background-color: #f5f5f5;
}
.goto > a {
  text-decoration: none;
  color: #666;
  font-size: 17px;
  margin-left: 30px;
  line-height: 60px;
}
.goto > a:hover {
  color: #ff6700;
}
.kkk {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  font-size: 18px;
  margin-left: 50px;
}
.kkk span {
  color: #ff6700;
}
.cart {
  width: 1200px;
  margin: 0 auto;
}
.cartnav {
  height: 60px;
}
.cartnav > div {
  padding-top: 30px;
  display: inline-block;
  font-size: 34px;
}
.cartnav > span {
  font-size: 12px;
  padding-left: 15px;
}
hr {
  border: 0px;
  height: 2px;
  background-color: #ff6700;
  margin-top: 25px;
}
.box {
  background-color: #f5f5f5;
}
.cart-ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  height: 100%;
}
.cart-li p {
  margin: 0px;
}
.cart-li > div {
  height: 100%;
  line-height: 70px;
  display: inline-block;
}
.cart-li > div:nth-child(1) {
  padding-left: 30px;
  width: 170px;
}
.cart-li > div:nth-child(2) {
  width: 400px;
}
.cart-li > div:nth-child(3) {
  width: 150px;
}
.cart-li > div:nth-child(4) {
  width: 150px;
}
.cart-li > div:nth-child(5) {
  width: 150px;
}
.cart-li > div:nth-child(6) {
  width: 150px;
}
.cart-li > div:nth-child(3),
.cart-li > div:nth-child(4),
.cart-li > div:nth-child(5),
.cart-li > div:nth-child(6) {
  text-align: center;
}

/* 购物车列表 */
.item {
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #d8d5d5;
}
.item p {
  margin: 0px;
}
.item > div {
  height: 100%;
  line-height: 100px;
  display: inline-block;
}
.item > div:nth-child(1) {
  padding-left: 30px;
  width: 170px;
}
.item > div:nth-child(2) {
  width: 400px;
}
.item > div:nth-child(3) {
  width: 150px;
}
.item > div:nth-child(4) {
  width: 150px;
}
.item > div:nth-child(5) {
  width: 150px;
}
.item > div:nth-child(6) {
  width: 150px;
}
.item > div:nth-child(3),
.item > div:nth-child(4),
.item > div:nth-child(5),
.item > div:nth-child(6) {
  text-align: center;
}
</style>
