<script setup>
import { GlobalStore } from "@/stores/index";
import { PlayerStore } from "@/stores/modules/player";
import { songUrl } from "@/api/api";
const playerstore = PlayerStore()
const globalstore = GlobalStore()
const state = reactive({
    list: [],
    kw: "",
    currentTabIndex: 0,
    songData: []
})
const {
    list,
    kw,
    currentTabIndex,
    songData
} = toRefs(state)
const tabsData = [
    {
        text: '歌曲',
    },
    {
        text: '歌单',
    },
    {
        text: '专辑',
    },
    {
        text: 'MV',
    },
]
function tabsChange(params) {

}
async function confirm() {
    // 存入输入的内容
    globalstore.setHistorcontent(state.kw)
    // 加载歌曲
    const res = await uni.$kmir.http.request({
        url: "cloudsearch",
        data: {
            keywords: state.kw
        }
    })
    state.songData = res.data.result.songs.map(item => {
        const names = item.ar.map(subItem => subItem.name).join(',');
        return {
            cover: item.al.picUrl,
            title: item.name,
            singer: names,
            album: item.al.name,
            time: item.dt,
            id: item.id,
            mv: item.mv
        }
    })
}
async function playerMusic(params) {
    const isExisting = playerstore.songs.findIndex(item => item.id == params.id)
    if (isExisting != -1) {
        playerstore.currentIndex = isExisting
    } else {
        // 1.获取歌曲链接
        const { data } = await songUrl(params)
        playerstore.songs.push({
            title: params.title,
            singer: params.singer,
            cover: params.cover,
            src: data.data[0].url,
            time: params.time,
            album: params.album,
            id: params.id,
            mv: params.mv,
        })
        console.log(playerstore.songs);
        playerstore.currentIndex = playerstore.songs.length - 1
        playerstore.player.src = playerstore.songs[playerstore.currentIndex].src
        playerstore.player.play();

    }
} function navigate(params) {
    uni.navigateTo({
        url: "/pages/" + params
    })
}
function taphisto(params) {
    state.kw = params;
    confirm()
}
</script>
<template>
    <div class="container">
        <div class="header">
            <tn-input height="60" @confirm="confirm" clearable custom-class="ipt tn-shadow-md" v-model="kw" type="text"
                placeholder="请输入歌曲">
                <template #prefix>
                    <tn-icon name="search" size="40" class="des" />
                </template>
            </tn-input>
            <div class="tn-ml-xs"><tn-button type="primary" size="sm" @click="navigate('index/index')">取消</tn-button></div>
        </div>
        <!-- 最近搜索 -->
        <div class="Recentsearch">
            <div class="tn-pt-sm tn-pb-sm">
                <text>最近搜索</text>
            </div>
            <tn-tag v-for="(item, index) in globalstore.historcontent" @click="taphisto(item)" :key="index"
                bg-color="#E6F3F9" text-color="#000" shape="round" class="tn-mr-sm tn-mb-sm tn-shadow-md">{{ item
                }}</tn-tag>
        </div>
        <!-- 搜索结果 -->
        <div class="searchResult tn-pt-sm tn-pb-sm">
            <tn-tabs @change="tabsChange" bg-color="" v-model="currentTabIndex">
                <tn-tabs-item v-for="(item, index) in tabsData" :key="index" :title="item.text" />
            </tn-tabs>
            <!-- 歌曲 -->
            <div class="List tn-mt-xs" v-show="currentTabIndex == 0">
                <div class="ListItem tn-mb-sm" v-for="item in songData" :key="item.id" @click="playerMusic(item)">
                    <div class="songcover">
                        <tn-avatar shape="square" :url="item.cover + '?param=40y40'" />
                    </div>
                    <div class="title tn-mr-xs tn-ml-xs">
                        <text class="tn-text-lg tn-text-ellipsis-1">{{ item.title }}</text>
                        <text class="tn-text-xs des tn-text-ellipsis-1">{{ item.album }}</text>
                    </div>
                    <div>
                        <tn-icon name="video" size="40" class="des tn-mr-xs" />
                        <tn-icon name="more-horizontal" size="40" class="des" />
                    </div>
                </div>
            </div>
            <!-- 歌单 -->
            <div class="List tn-mt-xs" v-show="currentTabIndex == 1">
                <div class="ListItem tn-mb-sm">
                    <div class="songcover">
                        <tn-avatar shape="square"
                            url="https://p2.music.126.net/V08nc-ELfydt4e7953pL8A==/109951165007678317.jpg" />
                    </div>
                    <div class="title tn-mr-xs tn-ml-xs">
                        <text class="tn-text-lg">SunFlower</text>
                        <text class="tn-text-xs des tn-text-ellipsis-1">我是副标题副标副标副标副标副标副副标副标副标副标副标标副标副标</text>
                    </div>
                    <div>
                        <tn-icon name="video" size="40" class="des tn-mr-xs" />
                        <tn-icon name="more-horizontal" size="40" class="des" />
                    </div>
                </div>
                <div class="ListItem tn-mb-sm">
                    <div class="songcover">
                        <tn-avatar shape="square"
                            url="https://p2.music.126.net/V08nc-ELfydt4e7953pL8A==/109951165007678317.jpg" />
                    </div>
                    <div class="title tn-mr-xs tn-ml-xs">
                        <text class="tn-text-lg">SunFlower</text>
                        <text class="tn-text-xs des tn-text-ellipsis-1">我是副标题副标副标副标副标副标副副标副标副标副标副标标副标副标</text>
                    </div>
                    <div>
                        <tn-icon name="video" size="40" class="des tn-mr-xs" />
                        <tn-icon name="more-horizontal" size="40" class="des" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import './index.scss';
</style>