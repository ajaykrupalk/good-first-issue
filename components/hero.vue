<template>
    <div class="pt-5 pb-5 flex flex-row justify-between">
        <div class="relative w-[30em] h-40 overflow-hidden">
            <div class="absolute -left-20 top-0">
                <sample-issue issueHeading="Mismatch in Validation" issueDesc="#100 opened on Nov 21, 2023 by ajaykrupalk"
                    bgColor="bg-blue-50" textColor="text-blue-500" borderColor="ring-blue-600/10"></sample-issue>
                <div class="absolute -left-20">
                    <sample-issue issueHeading="Middleware Documentation"
                        issueDesc="#2429 opened on Aug 24, 2019 by octocat" bgColor="bg-green-50" textColor="text-green-500"
                        borderColor="ring-green-600/10"></sample-issue>
                </div>
            </div>
        </div>
        <div class="w-96 text-center flex flex-col animate-fade">
            <h3 class="text-base mt-3 font-medium text-gray-500">
                <span class="inline-block">
                    <badge bgColor="bg-blue-50" textColor="text-blue-500" borderColor="ring-blue-600/10">
                        good first issue
                    </badge>
                </span>
                is a label used to identify issues that are well suited for new comers or contributors looking to make their
                first
                contribution.
            </h3>
            <h4 class="mt-10 font-bold text-black text-4xl">
                <span
                    class="number tabular-nums text-slate-900 font-extrabold mb-2 animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                    <span class="sr-only">200</span>K+
                </span>
                <span class="inline-block">
                    <badge bgColor="bg-purple-50" textColor="text-purple-500" borderColor="ring-purple-600/10">
                        good first issue
                    </badge>
                </span>
                open
            </h4>
            <p class="text-base font-medium text-gray-500">Contribute Today!!!</p>
        </div>
        <div class="relative w-[30em] h-40 overflow-hidden">
            <div class="absolute -right-20 top-0">
                <sample-issue issueHeading="Add CMake aliases" issueDesc="#123 opened on Sep 05, 2017 by npmcodes"
                    bgColor="bg-fuchsia-50" textColor="text-fuchsia-500" borderColor="ring-fuchsia-600/10"></sample-issue>
                <div class="absolute -right-20">
                    <sample-issue issueHeading="URL not converted in footnote"
                        issueDesc="#29 opened on Jan 15, 2019 by buildsbyctocat" bgColor="bg-yellow-50"
                        textColor="text-yellow-500" borderColor="ring-yellow-600/10"></sample-issue>
                </div>
            </div>
        </div>
    </div>
</template>