<template>
    <div class="pt-5 pb-5 flex flex-row justify-between">
        <div class="relative w-[30em] h-40 overflow-hidden">
            <div class="absolute -left-20 top-0">
                <sample-issue></sample-issue>
                <div class="absolute -left-20">
                    <sample-issue></sample-issue>
                </div>
            </div>
        </div>
        <div class="w-96 text-center flex flex-col animate-fade">
            <h3 class="text-base mt-3 font-medium text-gray-500">
                <span class="inline-block">
                    <badge />
                </span>
                is a label used to identify issues that are well suited for new comers or contributors looking to make their
                first
                contribution.
            </h3>
            <h4 class="mt-10 font-bold text-black text-4xl">
                <span
                    class="number tabular-nums text-slate-900 font-extrabold mb-2 animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                    <span class="sr-only">280</span>K+
                </span>
                <span class="inline-block">
                    <badge />
                </span>
                open
            </h4>
            <p class="text-base font-medium text-gray-500">Contribute Today!!!</p>
        </div>
        <div class="relative w-[30em] h-40 overflow-hidden">
            <div class="absolute -right-20 top-0">
                <sample-issue></sample-issue>
                <div class="absolute -right-20">
                    <sample-issue></sample-issue>
                </div>
            </div>
        </div>
    </div>
</template>