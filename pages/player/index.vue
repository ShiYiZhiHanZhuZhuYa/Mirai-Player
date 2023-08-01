<script setup>
const state = reactive({
list: [],
})
const {
list,
} = toRefs(state)


</script>
<template>

<div>播放器</div>
<navigation></navigation>
</template>
<style lang='scss' scoped>
</style>