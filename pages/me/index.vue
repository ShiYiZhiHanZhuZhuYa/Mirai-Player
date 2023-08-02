<script setup>
const state = reactive({
    list: [],
})
const {
    list,
} = toRefs(state)


</script>
<template>
    <div class="app">
        <div class="headbox tn-shadow-blur tn-flex items-center">
            <div class="tn-flex items-center tn-ml-lg">
                <tn-avatar size="lg" url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg" />
                <text class="tn-text-xl tn-ml-sm" style="color: #fff;">yxcr</text>
            </div>
        </div>
        <div class="tn-flex-wrap">

        </div>
        <!-- <view class="user">
            <view class="head-card tn-shadow-md">
                <view class="tool">
                    <tn-icon :size="60" color="#fff" name="upload" />
                    <tn-icon :size="60" color="#fff" name="download" />
                </view>
                <view class="userinfo">
                    <tn-avatar size="lg" url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg" />
                    <text style="color: #fff; padding-left: 20rpx; font-size: 38rpx;">yxcr</text>
                </view>
            </view>
        </view> -->
        <yxcr-nav></yxcr-nav>
    </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>