<template>
    <div class="flex flex-col gap-y-2 p-3 border-t-2 border-gray-200">
        <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-1 text-sm font-medium">
                <span class="w-12 text-gray-500 text-right">{{ props.issueNum }}</span>
                <p class="hover:text-blue-500 w-[35em]">{{ props.issueDesc }}</p>
            </div>
            <div class="w-10 h-max flex flex-row items-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-gray-500" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <path d="M12 11l0 .01" />
                    <path d="M8 11l0 .01" />
                    <path d="M16 11l0 .01" />
                </svg>
                <p class="text-sm font-medium text-gray-500">{{ props.commentCount }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    issueNum: String,
    issueDesc: String,
    commentCount: String
})
</script>