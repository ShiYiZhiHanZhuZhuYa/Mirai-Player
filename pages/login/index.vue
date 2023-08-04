<script setup>
const state = reactive({
    list: [],
})
const {
    list,
} = toRefs(state)

function gtback() {
    uni.navigateBack()
}
</script>
<template>
    <div class="container">
        <div class="head tn-flex justify-between">
            <div class="btn">
                <tn-icon size="30" name="left" @click="gtback" />
            </div>
            <div class="btn">
                <tn-icon size="30" name="share" />
            </div>
        </div>
        <div class="cover tn-shadow-blur"> </div>
        <form class="form_main" action="">
            <p class="heading">Login</p>
            <div class="inputContainer">
                <tn-icon name="my" class="inputIcon " />
                <input placeholder="Username" id="username" class="inputField" type="text">
            </div>
            <div class="inputContainer">
                <tn-icon name="lock" class="inputIcon" />
                <input placeholder="Password" id="password" class="inputField" type="password">
            </div>
            <tn-button class="tnbutton" shape="round" size="lg" shadow type="primary">Login</tn-button>
            <div class="signupContainer">
                <p>Don't have any account?</p>
                <a href="#">Sign up</a>
            </div>
        </form>
    </div>
</template>
<style lang='scss' scoped>
@import "./index.scss";
</style>