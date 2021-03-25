<template>
  <div class="footer">
    <div class="top">
      <div>
        <p class="el-icon-date">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7天无理由退换货</p>
        <p class="el-icon-truck">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;满99元全场包邮</p>
        <p class="el-icon-medal">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100%品质保证</p>
      </div>
    </div>
    <div class="bottom">
      <div>
        <img style="width: 66px; margin-top: 20px" src="../assets/github.png" alt="" />
        <ul>
          <li>首页</li>
          <li>|</li>
          <li>全部商品</li>
          <li>|</li>
          <li>关于我们</li>
        </ul>
        <p>商城版权所有 © 2021-3-21</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #2f2f2f;
}

.top {
  height: 150px;
  color: white;
  font-size: 22px;
  border-bottom: 1px solid #3d3d3d;
}
.top p {
  margin: 0px;
  line-height: 150px;
}
.top p:nth-child(1) {
  margin-left: 300px;
}
.top p:nth-child(2) {
  margin-left: 170px;
}
.top p:nth-child(3) {
  margin-left: 160px;
}

.bottom {
  background-color: #2f2f2f;
  height: 200px;
  color: #999;
}
.bottom > div {
  text-align: center;
}
.bottom > div > ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-top: 30px;
}
.bottom > div > ul > li {
  display: inline-block;
  margin: 0px 10px;
}
</style>
