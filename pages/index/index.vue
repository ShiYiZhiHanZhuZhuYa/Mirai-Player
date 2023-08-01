<script setup>
import { reactive, toRefs } from "vue";
const state = reactive({
  list: [],
  msg: "123456",
  currentSwiperIndex: 0
})
const {
  list,
  msg,
  currentSwiperIndex
} = toRefs(state)
// 轮播图数据
const swiperData = [
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-2.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new1.png',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
]
function navigate(params) {
  uni.navigateTo({
    url: "/pages/" + params
  })
}
</script>
<template>
  <div class="app">
    <div class="app__bar">
      <div class="app__bar__toolbar">
        <div class="app__bar__content">
          <div class="app__border">
            <div class="tn-flex-center" style="height: 35px;">
              <tn-icon name="search" size="40" @click="navigate('search/index')" />
            </div>
          </div>
          <div>Home</div>
          <div class="app__border">
            <tn-avatar size="100%" url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="swiper-container">
        <tn-swiper autoplay v-model="currentSwiperIndex" indicator indicator-type="dot" :data="swiperData" width="100%"
          height="300">
          <template #default="{ data }">
            <view class="swiper-data">
              <image class="image" :src="data" mode="aspectFill" />
            </view>
          </template>
        </tn-swiper>
      </div>

      <div class="btn-icon">
        <div class="tn-flex-row" style="justify-content: space-between;">
          <div class="btn-icon-item tn-flex-column">
            <tn-icon type="primary" name="music-fill" size="35" />
            <text class="smspan">
              每日推荐
            </text>
          </div>
          <div class="btn-icon-item tn-flex-column">
            <tn-icon type="primary" name="music-fill" size="35" />
            <text class="smspan">
              每日推荐
            </text>
          </div>
          <div class="btn-icon-item tn-flex-column">
            <tn-icon type="primary" name="music-fill" size="35" />
            <text class="smspan">
              每日推荐
            </text>
          </div>
          <div class="btn-icon-item tn-flex-column">
            <tn-icon type="primary" name="music-fill" size="35" />
            <text class="smspan">
              每日推荐
            </text>
          </div>
        </div>
      </div>
      <div class="popular">
        <div class="popular-title">流行音乐</div>
        <div class="popular-item">
          <div class="avatar">
            <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
          </div>
          <div class="info">
            <div class="title">我是歌曲标题</div>
            <div class="des">我是副标题</div>
          </div>
        </div>
        <div class="popular-item">
          <div class="avatar">
            <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
          </div>
          <div class="info">
            <div class="title">我是歌曲标题</div>
            <div class="des">我是副标题</div>
          </div>
        </div>

      </div>
      <div class="songlist">
        <div class="songlist-title">歌单</div>
        <div class="songbox">
          <div class="songlist-item">
            <div class="avatar">
              <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            </div>
            <div class="info">
              <div class="title">我是歌曲标题</div>
              <div class="des">我是副标题</div>
            </div>
          </div>
          <div class="songlist-item">
            <div class="avatar">
              <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            </div>
            <div class="info">
              <div class="title">我是歌曲标题</div>
              <div class="des">我是副标题</div>
            </div>
          </div>
          <div class="songlist-item">
            <div class="avatar">
              <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            </div>
            <div class="info">
              <div class="title">我是歌曲标题</div>
              <div class="des">我是副标题</div>
            </div>
          </div>
          <div class="songlist-item">
            <div class="avatar">
              <tn-avatar shape="square" size="120" url="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            </div>
            <div class="info">
              <div class="title">我是歌曲标题</div>
              <div class="des">我是副标题</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <yxcr-nav></yxcr-nav>
  </div>
</template>

<style lang="scss">
@import "./index.scss";

// .aq {
//   padding-top: var(--status-bar-height); //给组件加个上边距
// }
</style>