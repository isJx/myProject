<template>
  <div>
    <MyHeader></MyHeader>
    <div class="favorite">
      <img style="width: 40px; height: 40px" src="../assets/favorite.png" alt="" />
      <p>我的收藏</p>
    </div>
    <div class="boundary"></div>
    <div v-if="this.favorite.length !== 0" class="favoritetwo">
      <ul class="ul">
        <li v-for="(item, i) of favorite" :key="i" class="li">
          <a class="del" href="javascript:;" @click="del(item.fid)">×</a>
          <a class="a" href="javascript:;">
            <img :src="require(`../assets/${item.product_picture}`)" />
            <p class="name">{{ item.product_name }}</p>
            <p class="title">{{ item.product_title }}</p>
            <p class="price">{{ item.product_price }}元</p>
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="ifels">
      <div>
        <img src="../assets/imgs_q/cart-empty.png" alt="" />
      </div>
      <div style="background-color: #f7f7f7">
        <h1>您的收藏夹还是空的!</h1>
        <h2>快去购物吧</h2>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
export default {
  components: { MyHeader, Footer },
  props: ["uid"],
  data() {
    return {
      favorite: [],
    };
  },
  methods: {
    //   删除收藏夹商品
    del(fid) {
      this.axios.get("/api/delfavorite", { params: { fid: fid } }).then((res) => {
        if (res.data == 1) {
          this.$router.go(0);
        } else {
          this.$message.error("删除失败");
        }
      });
    },
  },
  beforeMount() {
    // 挂载页面之前,发送请求, 获取该用户收藏夹内容
    this.axios
      .get("/api/getfavorite", {
        params: {
          uid: this.uid,
        },
      })
      .then((res) => {
        this.favorite = res.data;
      });
  },
};
</script>

<style scoped>
.name {
  color: black;
  font-size: 15px;
  padding-top: 15px;
  padding-bottom: 8px;
  width: 180px;
  text-align: center;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  color: #646464;
  font-size: 13px;
  padding-bottom: 10px;
}
.price {
  color: #ff6700;
  font-size: 18px;
}
.a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
.ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.li {
  display: inline-block;
  border: 1px solid #ebeef5;
  width: 218px;
  height: 310px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  transition: all 0.2s linear;
  position: relative;
}
li:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.li p {
  margin: 0px;
}
.li img {
  width: 180px;
}
.del {
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 20px;
  color: #aaa;
  position: relative;
  left: 200px;
}

.favoritetwo {
  width: 1200px;
  margin: 0 auto;
}
.favorite {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}
.favorite p {
  margin: 0px;
  font-size: 32px;
}
.boundary {
  border-bottom: 2px solid #ff6700;
  margin-bottom: 30px;
}
.ifels {
  width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}
</style>
