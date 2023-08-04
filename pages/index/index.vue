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
  <div class="app page-container">
    <div class="app__bar">
      <div class="app__bar__toolbar">
        <div class="app__bar__content">
          <div class="app__border">
            <div class="tn-flex-center" style="height: 35px;">
              <tn-icon name="search" size="40" @click="navigate('search/index')" />
            </div>
          </div>
          <text class="tn-text-lg">Home</text>
          <div class="app__border">
            <tn-avatar size="100%" url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="swiper-item">
        <div class="swiper-wrapper tn-shadow-md">
          <tn-swiper autoplay v-model="currentSwiperIndex" indicator indicator-type="dot" :data="bannerList" width="100%"
            height="300">
            <template #default="{ data }">
              <view class="swiper-data">
                <image class="image" :src="data.pic" mode="aspectFill" />
              </view>
            </template>
          </tn-swiper>
        </div>
      </div>


      <div class="btn-icon">
        <div class="tn-flex-row tn-p tn-shadow-md yxbr-10"
          style="justify-content: space-between;background-color: #F6F9FE;">
          <div class="btn-icon-item tn-flex-column" v-for="item in btnList" :key="item.id">
            <tn-icon type="primary" :name="item.icon" size="35" />
            <text class="tn-mt-xs">
              {{ item.title }}
            </text>
          </div>
        </div>
      </div>

      <div class="songlist">
        <text class="tn-text-lg songlist-title">歌单</text>
        <div class="songbox">
          <div class="songlist-item" v-for="item in songList" :key="item.id">
            <div class="avatar">
              <div class="overlay">
                <div class="box">
                  <div class="tn-flex tn-flex-column">
                    <text class="list-title tn-text-xs tn-text-ellipsis-2">{{ item.name }}</text>
                    <div class="tn-flex des">
                      <tn-icon name="music-fill" color="#fff" size="30" />
                      <text class="tn-ml-xs"> 12 首</text>
                    </div>
                  </div>
                  <tn-icon name="video-fill" color="#fff" size="45" />
                </div>
              </div>
              <tn-avatar class="tn-shadow-md" shape="square" size="300" :url="item.coverImgUrl + '?param=300y300'" />
            </div>
            <div class="info">

            </div>
          </div>
        </div>
      </div>

      <div class="popular">
        <text class="tn-text-lg popular-title">流行音乐</text>
        <div class="popular-item" v-for="item in popMusic" :key="item.id">
          <div class="avatar">
            <tn-avatar class="tn-shadow-md" shape="square" size="130" :url="item.picUrl + '?param=100y100'" />
          </div>
          <div class="info">
            <text class="tn-text-sm">{{ item.name }}</text>
            <text class="des tn-text-ellipsis-2">{{ item.song.artists.map(item => item.name).join() }}</text>
          </div>
          <div class="tn-flex justify-end tn-flex-1 ">
            <tn-icon name="more-vertical" color="#fff" size="45" />
          </div>
        </div>
      </div>

    </div>
    <yxcr-nav></yxcr-nav>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";

// .aq {
//   padding-top: var(--status-bar-height); //给组件加个上边距
// }
</style>