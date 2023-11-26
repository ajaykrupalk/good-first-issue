<template>
    <div class="border-2 border-gray-200 rounded-md w-[40em] h-full">
        <div class="p-3">
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row gap-1 items-center">
                    <img :src="props.imgSrc" alt="avatar" class="h-6 w-6 rounded-md border-2 border-gray-200">
                    <h3 class="font-medium text-lg text-blue-500">{{ props.repo }}</h3>
                </div>
                <badge 
                    :badgeText="`${props.issueCount} issues`"
                    bgColor="bg-blue-50"
                    textColor="text-blue-500"
                    borderColor="ring-blue-600/10"
                />
            </div>
            <p class="text-sm">{{ props.repoDesc }}</p>
            <div class="flex flex-row gap-2 mt-2 text-xs text-gray-500 font-medium">
                <div class="flex flex-row gap-1 items-center">
                    <span class="h-2 w-2 bg-[#3572A5] rounded-full"></span>
                    {{ props.progLang }}
                </div>
                <div class="flex flex-row gap-1 items-center">
                    <img src="../assets/images/star.png" alt="star" class="h-4 w-4">
                    <p>{{ props.stars }}</p>
                </div>
                <div>
                    <p>{{ props.lastActivity }}</p>
                </div>
            </div>
        </div>
        <issue 
            :issueNum="props.issueNum"
            :issueDesc="props.issueDesc"
            :commentCount="props.commentCount"
        />
    </div>
</template>
<script setup>
const props = defineProps({
    imgSrc: String,
    repo: String,
    repoDesc: String,
    issueCount: String,
    colorCode: String,
    progLang: String,
    stars: String,
    lastActivity: String,
    issueNum: String,
    issueDesc: String,
    commentCount: String
})
</script>