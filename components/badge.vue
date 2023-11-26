<template>
    <div>
        <span :class="`${props.bgColor} ${props.textColor} ${props.borderColor}`"
            class="tracking-wide align-middle rounded-3xl py-0.5 px-2 font-bold ring-1 ring-inset" style="font-size: 10px">
            {{ props.badgeText }}
        </span>
    </div>
</template>
<script setup lang="js">
const props = defineProps({
    badgeText: String,
    bgColor: String,
    textColor: String,
    borderColor: String
})
</script>