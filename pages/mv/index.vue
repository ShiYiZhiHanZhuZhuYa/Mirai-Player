<script setup>
import { newMV } from "@/api/api";
const paging = ref()
const state = reactive({
    list: [],
    mvList: []
})
const {
    list,
    mvList
} = toRefs(state)

function onGetAllData(pageNo, pageSize) {
    newMV().then(({ data }) => {
        state.mvList = data.data
    })
}

function onRouter(id) {
    uni.navigateTo({
        url: `/pages/mv/play?id=${id}`
    })
}
</script>
<template>
    <z-paging ref="paging" v-model="mvList" @query="onGetAllData">
        <div class="container">
            <ul class="mv-list">
                <li class="mv-item" v-for="item in mvList" :key="item.id" @click="onRouter(item.id)">
                    <img class="mv-thumbnail" :src="item.cover + '?param=370y220'" alt="MV 1">
                    <div class="mv-info">
                        <div class="mv-title">{{ item.name }}</div>
                        <div class="mv-artist">{{ item.artists.map(item => item.name).join() }}</div>
                        <div class="mv-date">playCount:{{ item.playCount }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </z-paging>
</template>
<style lang='scss' scoped>
@import './index.scss';
</style>