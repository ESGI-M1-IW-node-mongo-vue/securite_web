<template>
  <article class="p-4 hover:bg-gray-50 cursor-pointer">
    <div class="flex space-x-3">
      <img :src="'https://picsum.photos/seed/' + author + '/50/50'" :alt="author" class="h-12 w-12 rounded-full"/>
      <div class="min-w-0 flex-1">
        <div class="flex items-center space-x-1">
          <span class="font-medium text-gray-900">{{ author }}</span>
          <span class="text-gray-500">@{{ author }}</span>
          <span class="text-gray-500">·</span>
          <span class="text-gray-500">{{ formatDate(time) }}</span>
        </div>
        <p class="text-gray-900 mt-1" v-html="content"></p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import {formatDate} from '~/utils/format'

defineProps<{
  author: string
  content: string
  time: Date
}>()
</script>