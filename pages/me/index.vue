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
        <div class="app__bar">
            <div class="app__bar__toolbar">
                <div class="app__bar__content">
                </div>
            </div>
        </div>
    </div>
    <navigation></navigation>
</template>
<style lang='scss' scoped></style>