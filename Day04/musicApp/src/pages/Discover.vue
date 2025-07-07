<template>
  <div class="discover">
    <!-- 顶部滑动轮播 -->
    <div class="banner">
      <van-swipe autoplay="3000" indicator-color="white" indicator-active-color="red">
        <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
          <img :src="image" alt="Banner" class="banner-image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 功能按钮 -->
    <div class="buttons">
      <div class="button-item">
        <img src="https://ts1.tc.mm.bing.net/th/id/OIP-C.1jeXhdIYfn1Cto7boFuXagHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Icon" class="button-icon" />
        <div class="button-text">每日推荐</div>
      </div>
      <div class="button-item">
        <img src="https://ts2.tc.mm.bing.net/th/id/OIP-C.mbZcTpq-harCKiVjPMqzVgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Icon" class="button-icon" />
        <div class="button-text">私人FM</div>
      </div>
      <div class="button-item">
        <img src="https://img.88icon.com/download/jpg/20200725/1485ce5dcc7b6ddd73b9fa2683594707_512_512.jpg" alt="Icon" class="button-icon" />
        <div class="button-text">歌单</div>
      </div>
      <div class="button-item">
        <img src="https://ts1.tc.mm.bing.net/th/id/OIP-C.YotTas_XJvu1G9bMq1igQQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Icon" class="button-icon" />
        <div class="button-text">排行榜</div>
      </div>
    </div>

    <!-- 歌单推荐 -->
    <div class="discover-playlist">
      <div class="discover-text" style="font-family: 微软雅黑;font-weight: bold;">发现好歌单</div>
      <van-button type="primary" class="discover-button">查看更多</van-button>
    </div>
    
    <!-- 歌单推荐列表 -->
    <div class="recommendations">
      <div class="recommendation-item" v-for="item in recommendations" :key="item.id">
        <div class="left">
          <img :src="item.image" alt="Playlist" class="playlist-image" />
          <div class="playlist-text">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bannerImages = ref([
  'https://ts1.tc.mm.bing.net/th/id/R-C.8992c1702c3201273f5587a4ec8ccac9?rik=XpJNI5aj7OTQIA&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw1200h800%2f20180217%2fa2b5-fyrpeif2147241.png&ehk=SrEvPEN1Hy%2f9F2yH1mcArQD5U4F9KyCY2f61tQVMD4U%3d&risl=&pid=ImgRaw&r=0',
  'https://p.ssl.qhimg.com/t014b87bad390bb5427.jpg?size=3000x1875'
]);

const recommendations = ref([
  { id: 1, image: 'https://ts1.tc.mm.bing.net/th/id/R-C.44daebd4126c9223a90a58368a4341ff?rik=RYldkcQP%2bwTLSA&riu=http%3a%2f%2fy0.ifengimg.com%2fyue_spider%2fdci_2013%2f01%2f5172752b2cef64f56a9210fc44bf9083.jpg&ehk=Uc58KGTfYa56lm%2b%2bjqCJP2KWCNyii2CcqmQRwW9I3%2f0%3d&risl=&pid=ImgRaw&r=0', name: '方大同歌单', num: '30'},
  { id: 2, image: 'https://img1.kuwo.cn/star/albumcover/300/s3s38/15/2687835903.jpg', name: 'Gareth.T歌单', num: '25'}
]);
</script>

<style scoped>
.discover {
  padding: 10px;
}

.banner {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
}

.banner-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.button-item {
  text-align: center;
}

.button-icon {
  width: 50px;
  height: 50px;
}

.button-text {
  margin-top: 10px;
  font-size: 14px;
}

.discover-playlist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.discover-text {
  font-size: 16px;
}

.discover-button {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 10px;
  border: 1px solid gray; 
}

.recommendations {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.recommendation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%; /* 两个元素并排 */
  margin-bottom: 2%; /* 间隔 */
}

.left img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.playlist-text {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
</style>