<script setup>
const state = reactive({
    list: [],
})
const {
    list,
} = toRefs(state)


</script>
<template>
    <div class="page-container">
        <div class="app">
            <div class="headbox tn-shadow-blur tn-flex items-center">
                <div class="tn-flex items-center tn-ml-lg">
                    <tn-avatar size="xl" url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg" />
                    <text class="tn-text-3xl tn-ml-sm" style="color: #fff;">yxcr</text>
                </div>
            </div>
            <div class="tn-flex-wrap boxgrid">
                <div class="colitem yxbr-10 tn-shadow-md tn-flex justify-around items-center">
                    <tn-avatar size="80" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center">
                        <text class="tn-text-lg">收藏</text>
                        <text class="des">123</text>
                    </div>
                </div>
                <div class="colitem yxbr-10 tn-shadow-md tn-flex justify-around items-center">
                    <tn-avatar size="80" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center">
                        <text class="tn-text-lg">最近</text>
                        <text class="des">123</text>
                    </div>
                </div>
                <div class="colitem yxbr-10 tn-shadow-md tn-flex justify-around items-center">
                    <tn-avatar size="80" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center">
                        <text class="tn-text-lg">本地</text>
                        <text class="des">123</text>
                    </div>
                </div>
                <div class="colitem yxbr-10 tn-shadow-md tn-flex justify-around items-center">
                    <tn-avatar size="80" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center">
                        <text class="tn-text-lg">云盘</text>
                        <text class="des">123</text>
                    </div>
                </div>
            </div>
            <div class="songlist">
                <div>
                    <text style="font-size: var(--font-size-lg);">我的歌单</text>
                    <text class="des tn-ml-xs">123</text>
                </div>
                <div class="songlist-item yxbr-10  tn-flex  items-center">
                    <tn-avatar size="120" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center tn-ml-lg">
                        <text class="tn-text-lg">云盘</text>
                        <text class="des">123</text>
                    </div>
                </div>
                <div class="songlist-item yxbr-10  tn-flex  items-center">
                    <tn-avatar size="120" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center tn-ml-lg">
                        <text class="tn-text-lg">云盘</text>
                        <text class="des">123</text>
                    </div>
                </div>
                <div class="songlist-item yxbr-10  tn-flex  items-center">
                    <tn-avatar size="120" shape="square" url="https://tnuiimage.tnkjapp.com/logo/tuniao.png" />
                    <div class="tn-flex tn-flex-column  items-center tn-ml-lg">
                        <text class="tn-text-lg">云盘</text>
                        <text class="des">123</text>
                    </div>
                </div>
            </div>
            <yxcr-nav></yxcr-nav>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>