<script setup>
import YxcrPlayer from "../player/player.vue";
import { PlayerStore } from "@/stores/modules/player";
const playerstore = PlayerStore()

const state = reactive({
    list: [],
    currentTabbar: 0,
    showPlayer: false
})
const {
    list,
    currentTabbar,
    showPlayer
} = toRefs(state)

function change(idx) {
    if (idx !== 2) {
        console.log("不属于中间按钮");
    }
}
</script>
<template>
    <div>
        <tn-tabbar :z-index="2" @change="change" frosted v-model="currentTabbar" fixed>
            <tn-tabbar-item icon="home" active-icon="home-fill" text="首页" />
            <tn-avatar size="95" :url="playerstore.songs[playerstore.currentIndex].cover" @click="showPlayer = true" />
            <tn-tabbar-item icon="my-circle" active-icon="my-circle-fill" text="我的" />
        </tn-tabbar>
    </div>
    <tn-popup v-model="showPlayer" bg-color="#EEF5FD" open-direction="bottom" height="100%">
        <YxcrPlayer @left-click="showPlayer = false"></YxcrPlayer>
    </tn-popup>
</template>
<style lang='scss' scoped>
@import "./index.scss";
</style>