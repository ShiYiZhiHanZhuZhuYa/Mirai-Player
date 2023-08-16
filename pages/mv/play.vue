<script setup>
import { mvUrl, mvDetail, commentMV } from "@/api/api";
const state = reactive({
    danmuList: [],
    mvInfo: {},
    commentList: []
})
const {
    danmuList,
    mvInfo,
    commentList
} = toRefs(state)

function videoErrorCallback(e) {
    uni.showModal({
        content: e.target.errMsg,
        showCancel: false
    })
}

onLoad(async ({ id }) => {
    const [mvData, mvDetailData, commentMVData] = await Promise.all([
        // 1.mv链接
        mvUrl(id),
        // 2.MV详情
        mvDetail(id),
        commentMV({ id })
    ]);
    state.mvInfo = { url: mvData.data.data.url, mvDetail: mvDetailData.data.data }
    state.commentList = commentMVData.data
    console.log("🚀 =>  state.commentList:", state.commentList)
})

</script>
<template>
    <div>
        <div class="mv-player">
            <video id="myVideo" :src="mvInfo.url" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn
                controls></video>
        </div>

        <div class="mv-details">
            <div class="mv-title">{{ mvInfo.mvDetail.name }}</div>
            <div class="mv-artist">{{ mvInfo.mvDetail.artists.map(item => item.name).join() }}</div>
        </div>

        <div class="user-comments">
            <div class="user-comment" v-for="item in commentList.comments" :key="item.id">
                <img class="user-avatar" :src="item.user.avatarUrl + '?param=32y32'" alt="User 1">
                <div class="user-info">
                    <div class="user-name">{{ item.user.nickname }}</div>
                    <div class="comment-text">{{ item.content }}</div>
                    <div class="comment-time">{{ item.timeStr }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import './play.scss';
</style>