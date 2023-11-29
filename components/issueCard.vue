<template>
    <div class="border-2 border-gray-200 rounded-md w-[40em] h-full">
        <div class="p-3 leading-7">
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row gap-1 items-center">
                    <img :src="props.imgSrc" alt="avatar" class="h-5 w-5 rounded-md">
                    <h3 class="font-medium text-sm text-blue-600">{{ props.repo }}</h3>
                </div>
                <badge bgColor="bg-gray-50" textColor="text-gray-500" borderColor="ring-gray-400">
                    <p class="text-xs">43.3k Stars</p>
                </badge>
            </div>
            <div class="flex flex-row gap-1 font-medium items-center">
                <div>
                    <p class="hover:text-blue-500 text-2xl">
                        {{ props.issueDesc }}
                        <span class="text-gray-500 text-xl">{{ props.issueNum }}</span>
                    </p>
                </div>
                <div>
                    <badge textColor="text-blue-600" borderColor="ring-blue-600/70">
                        {{ props.progLang }}
                    </badge>
                </div>
            </div>
            <div class="flex flex-row gap-1 text-sm text-gray-500">
                <p>
                    <span class="font-medium">{{ props.issueOwner }}</span> opened this issue {{ props.issueActivity }} ago
                </p>
                <span>
                    &#x2022;
                </span>
                <p>
                    {{ props.commentCount }} comments
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    imgSrc: String,
    repo: String,
    repoDesc: String,
    issueOwner: String,
    colorCode: String,
    progLang: String,
    stars: String,
    issueActivity: String,
    issueNum: String,
    issueDesc: String,
    commentCount: String
})
</script>