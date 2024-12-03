<template>
  <div class="border-b border-gray-200 p-4 hover:bg-gray-50">
    <div class="flex space-x-3">
      <img class="h-10 w-10 rounded-full" src="https://placehold.co/400" alt="" />
      <div class="min-w-0 flex-1">
        <div class="flex items-center space-x-1">
          <p class="font-medium text-gray-900">John Doe</p>
          <span class="text-gray-500">@johndoe</span>
          <span class="text-gray-500">·</span>
          <span class="text-gray-500">{{ formatDate(new Date()) }}</span>
        </div>
        <p class="text-gray-700 mt-1">
          <slot></slot>
        </p>
        <div class="flex items-center justify-between mt-3 text-gray-500">
          <div class="flex items-center space-x-8">
            <button class="flex items-center space-x-2 hover:text-blue-500">
              <ChatBubbleOvalLeftIcon class="h-5 w-5" />
              <span>4</span>
            </button>
            <button class="flex items-center space-x-2 hover:text-green-500">
              <ArrowPathRoundedSquareIcon class="h-5 w-5" />
              <span>12</span>
            </button>
            <button class="flex items-center space-x-2 hover:text-red-500">
              <HeartIcon class="h-5 w-5" />
              <span>89</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { formatDate } from '~/utils/format'
</script>