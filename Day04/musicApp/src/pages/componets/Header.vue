<template>
     <div>
          <div class="header">
               <div class="list">
                    <van-icon size="22" name="wap-nav" />
               </div>
               <div class="nav">
                    <div :class="{ active:currentTag===1 }" @click="handler(1)">我的</div>
                    <div :class="{ active:currentTag===2 }" @click="handler(2)">发现</div>
                    <div :class="{ active:currentTag===3 }" @click="handler(3)">云村</div>
                    <div :class="{ active:currentTag===4 }" @click="handler(4)">视频</div>
               </div>
               <div class="search">
                    <van-icon size="22" name="search" />
               </div>
          </div>
     </div>
</template>
<script setup>
    import { ref } from 'vue';
    import router from '@/router';
    //currentTag 控制当前导航对应的页面 1-我的 2-发现 3-云村 4-视频
    const currentTag = ref(1);
    const handler = (tag)=>{
     //tag 表示当前要跳转的页面
     // console.log(tag)
     currentTag.value = tag;
     //进行路由的跳转
     router.push({path:tag===1?'mine':tag===2?'discover':tag===3?'cloud':'video'})
    }
</script>
<!-- scoped样式表示仅当前作用域可见 -->
<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 0;
     .nav{
          display:flex;
          width: 180px;
          justify-content: space-around;
        }
     .active{
          font-weight: bold;
          font-family: "微软雅黑";
          color: red;
     }
}
</style>