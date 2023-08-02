<script setup>
import { reactive, toRefs } from "vue";
import { banner, newMusic, songPlaylist } from "@/api/api";
import { btnList } from "./btnlist";
const state = reactive({
  list: [],
  msg: "123456",
  currentSwiperIndex: 0,
  // 轮播图数据
  bannerList: [],
  // 流行音乐
  popMusic: [],
  // 歌单
  songList: []
})
const {
  list,
  msg,
  currentSwiperIndex,
  bannerList,
  popMusic,
  songList
} = toRefs(state)

onMounted(async () => {
  const { data } = await banner()
  const newMs = await newMusic();
  const songList = await songPlaylist({ limit: 10, offset: 20 });
  state.bannerList = data.banners
  state.popMusic = newMs.data.result
  state.songList = songList.data.playlists
})
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
        <tn-swiper autoplay v-model="currentSwiperIndex" indicator indicator-type="dot" :data="bannerList" width="100%"
          height="300">
          <template #default="{ data }">
            <view class="swiper-data">
              <image class="image" :src="data.pic" mode="aspectFill" />
            </view>
          </template>
        </tn-swiper>
      </div>

      <div class="btn-icon">
        <div class="tn-flex-row" style="justify-content: space-between;">
          <div class="btn-icon-item tn-flex-column" v-for="item in btnList" :key="item.id">
            <tn-icon type="primary" :name="item.icon" size="35" />
            <text class="smspan">
              {{ item.title }}
            </text>
          </div>
        </div>
      </div>

      <div class="songlist">
        <div class="songlist-title">歌单</div>
        <tn-scroll-list>
          <div class="songbox">
            <div class="songlist-item" v-for="item in songList" :key="item.id">
              <div class="avatar">
                <tn-avatar shape="square" size="130" :url="item.coverImgUrl + '?param=70y70'" />
              </div>
              <div class="info">
                <div class="title tn-text-ellipsis-2">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </tn-scroll-list>
      </div>

      <div class="popular">
        <div class="popular-title">流行音乐</div>
        <div class="popular-item" v-for="item in popMusic" :key="item.id">
          <div class="avatar">
            <tn-avatar shape="square" size="130" :url="item.picUrl + '?param=70y70'" />
          </div>
          <div class="info">
            <div class="title">{{ item.name }}</div>
            <div class="des tn-text-ellipsis-2">{{ item.song.artists.map(item => item.name).join() }}</div>
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