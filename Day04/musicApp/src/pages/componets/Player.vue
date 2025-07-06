<template>
    <div class="container">
        <!-- box音乐播放器父容器 -->
        <div class="box">
            <!-- 左侧放的是图片和歌曲名字 -->
            <div class="left">
                <div id="face" class="paused">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d8/11/3a/d8113a49-77df-5caf-574e-a3db86a41633/asset.jpg/1200x1200bf-60.jpg" 
                    alt="">
                </div>
                <div style="margin-left: 5px;font-family: '微软雅黑';">Histroy-exo</div>
            </div>
            <!-- 右侧放的是播放按钮和图标 -->
            <div class="right">
                <!-- 播放和暂停按钮 -->
                <div class="play_btn" @click="playStatus">
                    <van-icon v-if="!player" name="play-circle-o" size="28"></van-icon>
                    <van-icon v-else name="pause-circle-o" size="28"></van-icon>
                </div>
                <!-- 右侧图标 -->
                <div class="list_icon" style="margin-left: 5px;">
                    <van-icon name="bars" size="28"></van-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// 控制按钮播放和暂停的变量
const player = ref(false);
// 控制图片暂停和播放变量
const toggle = ref(false);
// 声明音频对象 
let audio = ref(null);
// 声明音频地址
const audioUrl = 'https://m801.music.126.net/20250706111957/f4052a984df420e31c839f16c647dc2e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14784888476/8a23/8e86/3454/fb72d2b3c8a9f0ce949e2e3827bd755d.mp3?vuutv=2MI9bBXm+ivH3aUjmPefO7+dMQqdL4C3r6HAsjLSZJVk853oglEqxz8R6u1R0vaFapSCEx1DWgAhlw2w8VvbCwr8aQyktAhyivjwH93XasA=';
// 控制播放状态
const playStatus = () => {
    player.value = !player.value;//切换播放状态
    // 首次点击初始化音频对象
    if(!audio.value){
        audio.value = new Audio(audioUrl);
        // 监听音频播放结束 自动停止
        audio.value.addEventListener('ended',()=>{
            player.value = false; //播放结束后重置状态 
        })
    }
    // 控制音频暂停/播放
    if(player.value){
        // 播放音频
        audio.value.play()
    }else{
        // 暂停音频
        audio.value.pause();
    }
    togglePlay();
}
// 同步按钮和图片状态 点暂停按钮图片暂停旋转 点播放按钮图片继续旋转
const togglePlay = () => {
    toggle.value = !toggle.value;
    // 一旦变量为toggle为true 图片旋转 
    if(toggle.value){
        //toggle为 true 移除暂停的动画效果
        document.getElementById('face').classList.remove('paused');
    }else{
        //toggle为 false 加上暂停的动画效果
        document.getElementById('face').classList.add('paused');
    }
}
</script>
<style lang="less" scoped>
// 定义图片旋转的动画
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.container {
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    // 固定在下方 固定定位
    position: fixed;
    bottom: 0;
    padding: 10px;
    box-sizing: border-box;

    .box {
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            align-items: center;

            #face{
                animation: rotate 2s linear infinite;
            }
            #face.paused{
                // 设置动画为暂停状态
                animation-play-state: paused;
            }
            #face>img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }

        .right {
            display: flex;
            align-items: center;
        }
    }
}
</style>