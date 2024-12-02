<template>
  <article class="p-4 hover:bg-gray-50 cursor-pointer">
    <div class="flex space-x-3">
      <img :src="avatar" :alt="author" class="h-12 w-12 rounded-full" />
      <div class="min-w-0 flex-1">
        <div class="flex items-center space-x-1">
          <span class="font-medium text-gray-900">{{ author }}</span>
          <span class="text-gray-500">{{ handle }}</span>
          <span class="text-gray-500">·</span>
          <span class="text-gray-500">{{ formatDate(time) }}</span>
        </div>
        <p class="text-gray-900 mt-1">{{ content }}</p>
        <div class="flex items-center justify-between mt-3 max-w-md">
          <button class="group flex items-center text-gray-500 hover:text-blue-500">
            <ChatBubbleOvalLeftIcon class="h-5 w-5 mr-2" />
            <span>{{ replies }}</span>
          </button>
          <button class="group flex items-center text-gray-500 hover:text-green-500">
            <ArrowPathRoundedSquareIcon class="h-5 w-5 mr-2" />
            <span>{{ retweets }}</span>
          </button>
          <button class="group flex items-center text-gray-500 hover:text-red-500">
            <HeartIcon class="h-5 w-5 mr-2" />
            <span>{{ likes }}</span>
          </button>
          <button class="group flex items-center text-gray-500 hover:text-blue-500">
            <ShareIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon, ShareIcon } from '@heroicons/vue/24/outline'
import { formatDate } from '~/utils/format'

defineProps<{
  author: string
  handle: string
  content: string
  avatar: string
  likes: number
  retweets: number
  replies: number
  time: Date
}>()
</script>