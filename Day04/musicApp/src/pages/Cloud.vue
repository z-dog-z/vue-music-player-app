<template>
  <div class="yunquan-container">
    <!-- 顶部标题和返回按钮 -->
    <div class="header-section">
      <div class="header-content">
        <van-icon name="arrow-left" class="back-icon" />
        <h1 class="title">云圈</h1>
      </div>
    </div>

    <!-- 五个圆形图标 -->
    <div class="icon-section">
      <div class="icon-item" v-for="item in iconItems" :key="item.id">
        <img :src="item.image" class="icon-image" />
        <div class="icon-text">{{ item.text }}</div>
      </div>
    </div>

    <!-- 解忧杂货铺卡片 -->
    <div class="shop-card">
      <div class="shop-content">
        <div class="shop-text">
          <div class="shop-title">云村解忧杂货铺</div>
          <div class="shop-subtitle">7.4万树洞信使 🟢5741人在线</div>
        </div>
        <div class="shop-actions">
          <van-button round size="small" class="invite-btn">邀请好友</van-button>
          <van-icon name="ellipsis" class="more-icon" />
        </div>
      </div>
    </div>

    <!-- 内容区域  -->
    <div class="card" style="margin-top: 10px;">
      <van-tabs v-model:active="activeTab" animated color="#f56c6c" background="#f4f4f4">
        <van-tab title="群聊">
          <div class="group-chat-list">
            <div class="group-item" v-for="group in groups" :key="group.id">
              <div class="group-avatar">
                <img :src="group.avatar" />
              </div>
              <div class="group-info">
                <div class="group-name">{{ group.name }}</div>
                <div class="group-last-msg">{{ group.lastMsg }}</div>
              </div>
              <div class="group-time">{{ group.time }}</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="圈内动态">
          <div class="tab-content">
            <div class="discussion-list">
              <div class="discussion-item" v-for="item in discussions[2]" :key="item.id">
                <div class="discussion-header">
                  <img class="user-avatar" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F75bfd660-a1b7-4102-bec4-1d5c4ecf8bf9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1754436110&t=cb9eadf0320f2c59fb04b6bc876f8620" />
                  <div class="user-info">
                    <div class="username">用户{{ item.id }}</div>
                    <div class="post-time">2小时前</div>
                  </div>
                </div>
                <div class="discussion-title">{{ item.title }}</div>
                <div class="discussion-content">{{ item.content }}</div>
                <div class="discussion-meta">
                  <span class="like-count"><van-icon name="good-job-o" /> {{ item.likes }}</span>
                  <span class="comment-count"><van-icon name="comment-o" /> {{ item.comments }}</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="匿名信箱">
          <div class="empty-message">
            <van-icon name="envelop-o" size="50" color="#ccc" />
            <div class="empty-text">暂无匿名消息</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Icon, Button, Tab, Tabs } from 'vant';

export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    const activeTab = ref(0); // 默认选中第一个选项卡（群聊）
    
    const iconItems = ref([
      { id: 1, image: 'https://img.88icon.com/upload/jpg/20210523/1f0d33293d352f55d546467846a79a14_94498_800_800.jpg!bg', text: '广场' },
      { id: 2, image: 'https://b0.bdstatic.com/dcaa68c927577e48d4c315e4c20fa05a.jpg', text: '邓紫棋' },
      { id: 3, image: 'https://wx3.sinaimg.cn/mw1024/007dJUPMgy1hy63dywvihj30ty0txqh4.jpg', text: '鹿晗' },
      { id: 4, image: 'https://img0.baidu.com/it/u=2478004585,147578842&fm=253&app=138&f=JPEG?w=800&h=1067', text: '房东的猫' },
      { id: 5, image: 'https://ww2.sinaimg.cn/mw690/006s5L9Gly1hqsuawgig3j30dw0dwmya.jpg', text: '李玖哲' }
    ]);

    const groups = ref([
      {
        id: 1,
        name: 'exo粉丝群',
        avatar: 'https://img1.baidu.com/it/u=2560167907,2830228993&fm=253&app=138&f=JPEG?w=800&h=1067',
        lastMsg: '鹿晗最近怎么样？',
        time: '12:30'
      },
      {
        id: 2,
        name: '吴世勋超话',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4a2813a7-7c45-4361-ba3b-72d94e6cc271%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1754436111&t=277c32f9b1745ffc21f7f1c0a4bd29c9',
        lastMsg: '吴世勋即将退伍！！！',
        time: '昨天'
      }
    ]);

    const discussions = {
      2: [
        { id: 1, title: '说出自己的小秘密', content: '禁止 好久不见', likes: 56, comments: 12 },
        { id: 2, title: '音乐分享会', content: '大家最近在听什么歌？来分享一下', likes: 32, comments: 15 }
      ]
    };

    return {
      activeTab,
      iconItems,
      groups,
      discussions
    };
  }
};
</script>

<style scoped>
.yunquan-container {
  padding: 15px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* 第一部分样式 */
.header-section {
  margin-bottom: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  position: relative;
}

.back-icon {
  font-size: 20px;
  color: #333;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

/* 第二部分样式 */
.icon-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
}

.icon-text {
  font-size: 12px;
  color: #666;
}

/* 第三部分样式 */
.shop-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

.shop-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop-text {
  flex: 1;
}

.shop-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
}

.shop-subtitle {
  font-size: 12px;
  color: #999;
}

.invite-btn {
  height: 28px;
  line-height: 28px;
  padding: 0 12px;
  background-color: #fef0f0;
  color: #f56c6c;
  border: none;
  margin-right: 10px;
}

.more-icon {
  color: #999;
  font-size: 18px;
}

/* 内容区域样式 - 改造后 */
.card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

/* 群聊样式 */
.group-chat-list {
  padding: 10px 15px;
}

.group-item {
  display: flex;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.group-item:last-child {
  border-bottom: none;
}

.group-avatar {
  width: 48px;
  height: 48px;
  margin-right: 12px;
}

.group-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.group-info {
  flex: 1;
}

.group-name {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
}

.group-last-msg {
  font-size: 13px;
  color: #999;
}

.group-time {
  font-size: 12px;
  color: #999;
}

/* 圈内动态样式 */
.tab-content {
  padding: 15px;
}

.discussion-list {
  padding-bottom: 10px;
}

.discussion-item {
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
}

.discussion-item:last-child {
  border-bottom: none;
}

.discussion-title {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
}

.discussion-content {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.5;
}

.discussion-meta {
  display: flex;
  font-size: 12px;
  color: #999;
}

.like-count, .comment-count {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.like-count .van-icon, .comment-count .van-icon {
  margin-right: 3px;
}

.discussion-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info {
  flex: 1;
}

.username {
  font-size: 14px;
  font-weight: bold;
}

.post-time {
  font-size: 12px;
  color: #999;
}

/* 匿名信箱样式 */
.empty-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}

.empty-text {
  margin-top: 15px;
  color: #999;
  font-size: 14px;
}
</style>