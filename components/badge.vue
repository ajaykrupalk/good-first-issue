<template>
    <span :class="`${props.bgColor} ${props.textColor} ${props.borderColor}`"
        class="tracking-wide align-middle rounded-3xl py-0.5 px-2 font-bold ring-1 ring-inset text-xxs">
        <slot></slot>
    </span>
</template>
<script setup lang="js">
const props = defineProps({
    bgColor: String,
    textColor: String,
    borderColor: String
})
</script>