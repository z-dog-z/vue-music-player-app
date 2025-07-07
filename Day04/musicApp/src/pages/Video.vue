<template>
  <div class="simple-video-player">
    <!-- 第一个视频 -->
    <video
      controls 
      style="width: 100%; max-width: 600px; display: block; margin: 0 auto;margin-bottom: 0px;"
      poster="https://n.sinaimg.cn/sinakd20241019s/570/w1080h1090/20241019/b317-9e260007d513a4aa4f3394c6a7e167b8.png" 
      :src="videoUrl" 
    >
    </video>
    
    <!-- 第一个视频 -->
    <div class="video-info" style="padding: 15px; max-width: 600px; margin: 0 auto;margin-bottom: 10px;">
      <h3 style="margin: 10px 0;">麦恩莉-方大同mv</h3>
      <div style="color: #666; font-size: 14px;">
        <span style="margin-right: 15px;">👁 12.5万</span>
        <span>❤ 8.3万</span>
      </div>
    </div>
        <!-- 第二个视频 -->
    <video
      controls 
      style="width: 100%; max-width: 600px; display: block; margin: 0 auto; margin-bottom: 0px;"
      poster="https://imge.kugou.com/stdmusic/20220420/20220420222421487124.jpg" 
      :src="videoUrl2" 
    >
    </video>
    
    <!-- 第二个视频 -->
    <div class="video-info" style="padding: 15px; max-width: 600px; margin: 0 auto;">
      <h3 style="margin: 10px 0;">我们的明天-鹿晗</h3>
      <div style="color: #666; font-size: 14px;">
        <span style="margin-right: 15px;">👁 52.1万</span>
        <span>❤ 21万</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import videoUrl from '@/assets/xw0DAFtobiqAZrp9AQezYyKhlVo814.mp4'
import videoUrl2 from '@/assets/sQ0DAFld7X6AKIeJBca9UuhCmI8154.mp4'
</script>
<style>
/* 基础样式确保视频响应式 */
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>