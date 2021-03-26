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

          <el-tab-pane label="手机" name="second"
            ><el-row>
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
          </el-tab-pane>

          <el-tab-pane label="电视机" name="third"
            ><el-row>
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
          </el-tab-pane>

          <el-tab-pane label="空调" name="fourth">
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
          </el-tab-pane>

          <!-- 洗衣机 -->
          <el-tab-pane label="洗衣机" name="fifth">
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
          </el-tab-pane>

          <el-tab-pane label="保护套" name="sixth">
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
          </el-tab-pane>

          <el-tab-pane label="贴膜" name="seventh">
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
          </el-tab-pane>

          <el-tab-pane label="充电器" name="eighth">
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
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      product: [], // 保存请求到的商品
    };
  },
  methods: {
    handleClick(event) {
      let id = event.index;
      // 判断是否显示全部商品,大于0 则是分类查询
      if (id > 0) {
        this.axios
          .get("/api/getclass", {
            params: {
              id,
            },
          })
          .then((res) => {
            console.log(res.data);
            // this.product.length = 0;
            this.product = res.data;
          });
      } else {
        // 等于0, 则查询所有商品列表
        this.axios.get("/api/product").then((res) => {
          this.product = res.data;
        });
      }
    },
    // 根据商品id, 跳转到详情页
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
