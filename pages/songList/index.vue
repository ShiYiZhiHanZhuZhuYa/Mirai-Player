<script setup>
const state = reactive({
    songList: [
        { playCount: 555, title: "栗山未来", sum: 50, cover: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9495b6a9-acef-4749-b0d1-bd41b56ac2ff%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694075938&t=6631cb8c488699ce113b5e7ff52d2b74" },
        { playCount: 5655, title: "栗山未来", sum: 67, cover: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9495b6a9-acef-4749-b0d1-bd41b56ac2ff%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694075938&t=6631cb8c488699ce113b5e7ff52d2b74" },
    ],
    currentTabIndex: 0
})
const {
    songList,
    currentTabIndex
} = toRefs(state)
const tabsData = [
    { text: "推荐" },
    { text: "电子" },
    { text: "华语" },
    { text: "粤语" },
]
function gtback() {
    uni.navigateBack()
}
function tabsChange(params) {

}
</script>
<template>
    <div class="page-container">
        <div class="head tn-flex justify-between">
            <div class="btn">
                <tn-icon size="30" name="left" @click="gtback" />
            </div>
            <div class="btn">
                <tn-icon size="30" name="share" />
            </div>
        </div>
        <tn-tabs @change="tabsChange" bg-color="" v-model="currentTabIndex" class="yxbr-10 tn-mt-sm tn-mb-sm">
            <tn-tabs-item v-for="(item, index) in tabsData" :key="index" :title="item.text" />
        </tn-tabs>
        <!-- <div class="song-list"> -->
        <tn-water-fall :data="songList">
            <template #left="{ item }">
                <div class="song-item">
                    <div class="song-card">
                        <div class="play-count">
                            <tn-icon name="play" />
                            {{ item.playCount }}w
                        </div>
                        <img class="song-cover" :src="item.cover" alt="封面" />
                    </div>
                    <div class="song-info">
                        <p class="song-title">{{ item.title }}</p>
                        <p class="song-artist">{{ item.artist }}</p>
                    </div>
                </div>
            </template>
            <template #right="{ item }">
                <div class="song-item">
                    <div class="song-card">
                        <div class="play-count">
                            <tn-icon name="play" />
                            {{ item.playCount }}w
                        </div>
                        <img class="song-cover" :src="item.cover" alt="封面" />
                    </div>
                    <div class="song-info">
                        <p class="song-title">{{ item.title }}</p>
                        <p class="song-artist">{{ item.artist }}</p>
                    </div>
                </div>
            </template>
        </tn-water-fall>
        <!-- <div class="song-item" v-for="song in songList" :key="song.id">
                <div class="song-card">
                    <div class="play-count">{{ song.playCount }}</div>
                    <img class="song-cover" :src="song.cover" alt="封面" />
                </div>
                <div class="song-info">
                    <p class="song-title">{{ song.title }}</p>
                    <p class="song-artist">{{ song.artist }}</p>
                </div>
            </div> -->
        <!-- </div> -->
    </div>
</template>
<style lang='scss' scoped>
@import './index.scss';
</style>