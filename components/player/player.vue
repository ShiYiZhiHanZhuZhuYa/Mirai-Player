<script setup>
import { PlayerStore } from "@/stores/modules/player";
import { getImageThemeColor } from "@/src/utils/ThemeColor";
const playerstore = PlayerStore()
const state = reactive({
    list: [],
    isPlaying: false,
    sliderValue: 0,
    progress: 0,
    currentTime: 0,
    duration: 0,
    animationPlayState: "paused",
    coverThemeColor: "#E1F5F8"
})
const {
    list,
    isPlaying,
    sliderValue,
    progress,
    currentTime,
    duration,
    animationPlayState,
    coverThemeColor
} = toRefs(state)
onMounted(() => {
    nextTick(() => {
        initPlayer()
        getImageThemeColor(playerstore.songs[playerstore.currentIndex].cover, "getImageThemeColorCanvas", (retRGBColor) => {
            state.coverThemeColor = retRGBColor
        })
    })
})

const Emits = defineEmits(['leftClick'])
// watch(() => playerstore.currentIndex, () => {
//     console.log("🚀 => file: player.vue:33 => playerstore.currentIndex:", playerstore.currentIndex)
//     // 把歌曲封面的主题颜色存储起来，减少网络请求
//     console.log(playerstore.songs[playerstore.currentIndex].theme);
//     if (playerstore.songs[playerstore.currentIndex].theme) {
//         state.coverThemeColor = retRGBColor
//     } else {
//         getImageThemeColor(playerstore.songs[playerstore.currentIndex].cover, "getImageThemeColorCanvas", (retRGBColor) => {
//             state.coverThemeColor = retRGBColor
//             playerstore.songs[playerstore.currentIndex].theme = retRGBColor
//         })
//     }
// })
function initPlayer() {
    // 侦听时间变化
    playerstore.player.onTimeUpdate(() => {
        // 进度条时间
        state.progress = playerstore.player.currentTime / playerstore.player.duration * 100
        // 当前播放时间
        state.currentTime = Math.floor(playerstore.player.currentTime)
        // 当前播放歌曲的总时长
        state.duration = Math.floor(playerstore.player.duration)
    });
    // 侦听播放状态
    playerstore.player.onPlay(() => {
        state.isPlaying = true
        state.animationPlayState = "running"
        console.log("播放中");
    })
    playerstore.player.onPause(() => {
        state.isPlaying = false
        state.animationPlayState = "paused"
        console.log("暂停中");
    })

    playerstore.player.onEnded(() => {
        playNext()
    })

    playerstore.player.src = playerstore.songs[playerstore.currentIndex].src
}
// 暂停方法
function pause() {
    state.isPlaying = false
    state.animationPlayState = "paused"
    playerstore.player.pause();
}

// 播放方法
function play() {
    getImageThemeColor(playerstore.songs[playerstore.currentIndex].cover, "getImageThemeColorCanvas", (retRGBColor) => {
        state.coverThemeColor = retRGBColor
        console.log(retRGBColor);
    })
    state.isPlaying = true
    state.animationPlayState = "running"
    playerstore.player.play();
}

function togglePlay() {
    if (state.isPlaying) {
        pause()
    } else {
        play()
    }
}
// 下一首
function playNext() {
    if (playerstore.currentIndex === playerstore.songs.length - 1) {
        playerstore.currentIndex = 0
    } else {
        playerstore.currentIndex++
    }
    getImageThemeColor(playerstore.songs[playerstore.currentIndex].cover, "getImageThemeColorCanvas", (retRGBColor) => {
        state.coverThemeColor = retRGBColor
    })
    playerstore.player.src = playerstore.songs[playerstore.currentIndex].src;
    playerstore.player.play();
}
// 上一首
function playPrev() {
    if (playerstore.currentIndex === 0) {
        playerstore.currentIndex = playerstore.songs.length - 1
    } else {
        playerstore.currentIndex--
    }
    getImageThemeColor(playerstore.songs[playerstore.currentIndex].cover, "getImageThemeColorCanvas", (retRGBColor) => {
        state.coverThemeColor = retRGBColor
    })
    playerstore.player.src = playerstore.songs[playerstore.currentIndex].src;
    playerstore.player.play();
}

// 格式化时间
function formatTime(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
// 更改歌曲时间进度
function changeProgress() {
    let ct = (state.progress * state.duration) / 100;
    if (!isNaN(ct)) {
        playerstore.player.seek(ct)
    }
}


function leftClick() {
    Emits("leftClick")
}
</script>
<template>
    <div class="container" :style="{ 'background': `linear-gradient(${coverThemeColor} 0%,#EEF2F8 50%, #EDF4FC 100%` }">
        <!-- 规避头部的距离 -->
        <div style=" padding-top: var(--status-bar-height);"></div>
        <canvas id="getImageThemeColorCanvas" canvas-id="getImageThemeColorCanvas" style="position: absolute;
  left: -9999px;
  top: -9999px;"></canvas>
        <!-- 头部 -->
        <div class="header">
            <div class="by" style="background-color: #fff;width: 3em;height: 3em;">
                <tn-icon size="45" name="down" @click="leftClick" />
            </div>
            <div class="header-title">
                <text class="title">{{ playerstore.songs[playerstore.currentIndex].title }}</text>
                <text class="des" style="color: #000;">{{ playerstore.songs[playerstore.currentIndex].singer }}</text>
            </div>
            <div class="by" style="background-color: #fff;width: 3em;height: 3em;">
                <tn-icon size="45" name="share" />
            </div>
        </div>
        <!-- 封面 -->
        <div class="content">
            <div class="cover">
                <image class="image rotate" :style="{ animationPlayState: animationPlayState }"
                    :src="playerstore.songs[playerstore.currentIndex].cover" mode="aspectFill" />
            </div>
        </div>
        <!-- 歌词 -->
        <!-- <div class="lyrics-container">
            <ul>
                <li v-for="(line, index) in parsedLyrics" :key="index" :class="{ active: currentLine === index }">
                    {{ line.text }}
                </li>
            </ul>
        </div> -->
        <!-- 操作栏 -->
        <div class="tabbar">
            <view class="tn-p-lg">
                <tn-slider @change="changeProgress" v-model="progress" :min="0" :max="100" />
                <div class="time des">
                    <text>{{ formatTime(currentTime) }}</text>
                    <text> {{ formatTime(duration) }}</text>
                </div>
                <div class="btn">
                    <div class="by">
                        <tn-icon size="49" name="previous-song-fill" @click="playNext" />
                    </div>
                    <div class="by" style="width: 5em;height: 5em;">
                        <tn-icon size="60" :name="isPlaying ? 'stop' : 'play-fill'" @click="togglePlay" />
                    </div>
                    <div class="by">
                        <tn-icon size="49" name="next-song-fill" @click="playPrev" />
                    </div>

                </div>
            </view>
            <div class="review">
                <tn-icon size="45" name="menu" />
                <text class="des ">0评论<tn-icon class="tn-ml-xs" size="20" name="up-double" /> </text>
                <tn-icon size="45" name="align" />
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import "./index.scss";
</style>