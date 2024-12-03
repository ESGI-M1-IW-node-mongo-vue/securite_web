<template>
  <div class="relative">
    <div class="h-48 bg-gray-800"></div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="relative -mt-24 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img
            class="h-32 w-32 rounded-full ring-4 ring-white bg-white sm:h-32 sm:w-32"
            :src="'https://picsum.photos/seed/' + props.data.name + '/250/250'"
            alt="Profile"
          />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{props.data.name}}</h1>
            <p class="text-gray-500">{{props.data.email}}</p>
          </div>
          <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <UiButton variant="primary">Edit profile</UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data:{type:Object,required:true}
})
</script>