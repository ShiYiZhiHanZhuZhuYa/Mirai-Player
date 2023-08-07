<script setup>
import { formatTime } from "@/src/utils/formatTime";

const state = reactive({
    list: [],
})
const {
    list,
} = toRefs(state)

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
})
</script>
<template>
    <div class="popular">
        <div class="popular-item" v-for="item in props.data" :key="item.id">
            <div class="avatar">
                <tn-avatar class="tn-shadow-md" shape="square" size="130" :url="item.cover + '?param=100y100'" />
            </div>
            <div class="info">
                <text class="tn-text-sm">{{ item.title }}</text>
                <text class="des tn-text-ellipsis-2">{{ item.singer }}</text>
            </div>
            <div class="tn-flex justify-end tn-flex-1 des">
                <text class="tn-text-sm">{{ formatTime(item.time) }}</text>
                <tn-icon name="more-vertical" size="45" />
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
@import './index.scss';

.des {
    color: var(--text-color-placeholder);
}
</style>