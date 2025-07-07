<template>
    <div class="mine_parent">
        <!-- 头像部分 -->
        <div class="avatar">
            <!-- 左侧头像 用户 -->
            <div class="username">
                <!-- 头像 -->
                <div class="left">
                    <van-image round width="3rem" height="3rem"
                        src="https://wx4.sinaimg.cn/mw690/006i0nC8ly1hoxfa2gma9j31z41z4gzn.jpg" />
                </div>
                <!-- 文字 -->
                <div class="right" style="margin-left: 10px;">
                    <div style="font-weight: bold;font-size: 14px;font-family:'微软雅黑';">狗子</div>
                    <div>
                        <van-button size="small" style="height:20px;" plain round type="default">Lv4.0</van-button>
                    </div>
                </div>
            </div>
            <!-- 右侧箭头 -->
            <div class="icon">
                <van-icon name="arrow" size="20" />
            </div>
        </div>
        <!-- 完成宫格部分 -->
        <div class="grid" style="margin-top: 20px;">
            <van-grid square :border="false">
                <van-grid-item icon-color="red" v-for="item in gridList" :key="item.id" :icon="item.icon"
                    :text="item.text" />
            </van-grid>
        </div>
        <!-- 我喜欢的音乐 -->
        <div class="music">
            <div class="left" style="display: flex;">
                <!-- 图标 -->
                <div class="icon">
                    <van-icon name="like" color="#fff" />
                </div>
                <!-- 我喜欢音乐文字 -->
                <div class="text" style="margin-left:10px;">
                    <div style="font-weight: bold;margin-bottom: 6px;">我喜欢的音乐</div>
                    <div style="color: #736d6d;font-size: 12px;">666首</div>
                </div>
            </div>
            <div class="right">
                <van-button size="mini" icon="fire" plain round type="default">心动模式</van-button>
            </div>
        </div>

        <!-- 收藏歌单 -->
        <div class="card" style="margin-top: 10px;">
            <van-tabs v-model:active="active" animated color="red" background="#f4f4f4">
                <van-tab title="创建歌单" name="a">
                    <div class="tab">
                        <div class="top">
                            <div class="left" style="font-size: 12px;color: #736d6d;">创建歌单(3个)</div>
                            <div class="right">
                                <van-icon name="plus" color="#736d6d" size="18"></van-icon>
                                <van-icon name="bars" color="#736d6d" size="18" style="margin-left: 5px;"></van-icon>
                            </div>
                        </div>
                        <div class="bottom" v-for="item in playList" :key="item.id">
                            <div class="left">
                                <img width="45px" height="45px" :src="item.url" alt="">
                            </div>
                            <div class="right">
                                <div style="font-weight: bold;">{{ item.name }}</div>
                                <div style="font-size: 12px;color: #736d6d;margin-top: 3px;">{{ item.num }}首</div>
                            </div>
                        </div>  
                    </div>
                </van-tab>
                <van-tab title="收藏歌单" name="b">
                    <div class="tab">
                        <div class="top">
                            <div class="left" style="font-size: 12px;color: #736d6d;">收藏歌单(2个)</div>
                            <div class="right">
                            <van-icon name="bars" color="#736d6d" size="18"></van-icon>
                            </div>
                        </div>
                        <div class="bottom" v-for="item in collectList" :key="item.id">
                          <div class="left">
                            <img width="45px" height="45px" :src="item.url" alt="">
                        </div>
                        <div class="right">
                         <div style="font-weight: bold;">{{ item.name }}</div>
                         <div style="font-size: 12px;color: #736d6d;margin-top: 3px;">{{ item.num }}首，by {{ item.creator }}</div>
                         </div>
                       </div>
                    </div>
                </van-tab>
                <van-tab title="歌单助手" name="c">
                    <div class="tab">
                        <div style="padding: 20px;text-align: center;color: #736d6d;">
                            <van-icon name="music" size="50" />
                            <div style="margin-top: 10px;">你还没有创建歌单助手</div>
                            <van-button size="small" style="margin-top: 15px;" round type="danger">创建歌单助手</van-button>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const active = ref('a');
// 声明宫格数组
const gridList = ref([
    { id: 1, icon: "shop", text: '本地音乐' },
    { id: 2, icon: "shop-collect", text: '云盘' },
    { id: 3, icon: "goods-collect", text: '已购' },
    { id: 4, icon: "play-circle", text: '最近播放' },
    { id: 5, icon: "friends", text: '我的关注' },
    { id: 6, icon: "star", text: '收藏和赞' },
    { id: 7, icon: "volume", text: '我的播客' },
    { id: 8, icon: "music", text: '音乐应用' },
]);
// 定义一个创建歌单的数组
const playList = ref([
    {id:1,url:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5b/b4/90/5bb490f9-4db6-44be-7183-b6e844ec75db/EXO_2_EXODUS_KORver.jpg/1200x1200bf-60.jpg",name:'exo',num:'30'},
    {id:2,url:"https://ts4.tc.mm.bing.net/th/id/OIP-C.M6ayu7bqSeb_f4w6pN4m3gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",name:'林俊杰',num:'25'},
    {id:3,url:"https://img.duotegame.com/article/contents/2022/07/13/2022071344152899.jpg",name:'周杰伦',num:'10'},
]);
// 定义一个收藏歌单的数组
const collectList = ref([
    {id:1,url:"https://pic1.zhimg.com/v2-f9467ef01e077144ec25890dc43cc7cc_r.jpg",name:'流行热歌榜',num:'100',creator:'zdodz'},
    {id:2,url:"https://pic3.zhimg.com/v2-c896fcdf2d7d6f6538bb96d2c878e562_r.jpg",name:'K-POP精选',num:'50',creator:'zpigz'},
]);
</script>
<style lang="less" scoped>
.mine_parent {
    height: calc(100vh - 32px);
    background-color: #f4f4f4;
    padding: 10px;

    // 头像样式
    .avatar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .username {
            display: flex;
        }
    }

    // 宫格样式
    .grid {
        border-radius: 10px;
        overflow: hidden;
    }

    // 我喜欢的音乐样式
    .music {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;

        .icon {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            background-image: url(https://img14.360buyimg.com/pop/jfs/t1/296913/10/17343/55205/6857a434F588d5edd/78a729730d009db3.jpg);
            // 设置背景图片尺寸 宽 高
            background-size: 100% 100%;
        }
    }
    // 收藏歌单
    .card{
        background-color: #fff;
        .tab{
            padding: 5px;
            .top{
                padding: 10px;
                display: flex;
                justify-content: space-between;
            }
            .bottom{
                padding: 10px;
                display: flex;
                .left{
                    margin-right: 10px;
                    img{
                        border-radius: 5px;
                    }
                }
            }
        }
    }
}
</style>