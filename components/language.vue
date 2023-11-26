<template>
    <div class="flex flex-col gap-y-1 font-[400]">
        <li class="flex flex-row items-center gap-x-1.5 p-1 rounded-md hover:bg-gray-100">
            <span :class="`${props.colorCode}`" class="h-2.5 w-2.5 rounded-full"></span>
            <p class="text-sm">{{props.progLang}}</p>
            <span class="inline-block text-xs rounded-xl bg-gray-200 px-1.5 py-0.5 font-semibold">{{ props.count }}</span>
        </li>
    </div>
</template>
<script setup lang="js">
const props = defineProps({
    progLang: String,
    colorCode: String,
    count: String
})
</script>