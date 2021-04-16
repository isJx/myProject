<template>
  <div class="about">
    <MyHeader></MyHeader>
    <MyRegister></MyRegister>
    <div class="box">
      <h1>个人项目</h1>
      <ul>
        <li><p>每个优秀的人</p></li>
        <li><p>都有一段沉默的时光</p></li>
        <li><p>那段时光</p></li>
        <li><p>是付出了很多努力</p></li>
        <li><p>却得不到结果的日子</p></li>
        <li><p>我们把它叫做扎根</p></li>
        <li><p>只要根扎实了</p></li>
        <li><p>才能结出丰硕的果实</p></li>
        <br />
        <h2 style="text-align: right">未完成页面...</h2>
        <br />
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import MyRegister from "../components/MyRegister";
import Footer from "../components/Footer";
export default {
  components: { MyHeader, MyRegister, Footer },
};
</script>

<style scoped>
.about .box {
  width: 1200px;
  margin: 0 auto;
}
</style>
