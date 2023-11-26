<template>
    <div class="mt-3 overflow-hidden w-max rounded-md border-2 border-gray-200 p-2 animate-slide">
        <div class="flex flex-row gap-1 items-baseline no-wrap">
            <img src="../assets/images/issue.png" alt="issue icon" class="h-4 w-4">
            <h3 class="font-medium text-gray-300 text-lg">{{ props.issueHeading }}</h3>
            <badge 
                :badgeText="props.badgeText"
                :bgColor="props.bgColor"
                :textColor="props.textColor"
                :borderColor="props.borderColor"
            ></badge>
        </div>
        <p class="text-gray-300 w-full text-xs">{{ props.issueDesc }}</p>
    </div>
</template>
<script setup lang="js">
const props = defineProps({
    issueHeading: String,
    issueDesc: String,
    badgeText: String,
    bgColor: String,
    textColor: String,
    borderColor: String
})
</script>