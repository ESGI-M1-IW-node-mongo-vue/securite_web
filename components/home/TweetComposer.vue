<template>
  <div class="p-4 border-b border-gray-200">
    <div class="flex space-x-4">
      <img
          src="https://placehold.co/400"
          alt="Your avatar"
          class="h-12 w-12 rounded-full"
      />
      <div class="flex-1">
        <textarea
            v-model="tweetContent"
            rows="3"
            class="w-full border-0 focus:ring-0 text-lg placeholder:text-gray-500 resize-none"
            placeholder="What is happening?!"
        ></textarea>
        <div class="flex items-center justify-between pt-3">
          <div class="flex space-x-2 text-blue-500">
            <button class="p-2 hover:bg-blue-50 rounded-full">
              <PhotoIcon class="h-5 w-5" />
            </button>
            <button class="p-2 hover:bg-blue-50 rounded-full">
              <GifIcon class="h-5 w-5" />
            </button>
            <button class="p-2 hover:bg-blue-50 rounded-full">
              <ListBulletIcon class="h-5 w-5" />
            </button>
            <button class="p-2 hover:bg-blue-50 rounded-full">
              <FaceSmileIcon class="h-5 w-5" />
            </button>
          </div>
          <UiButton variant="primary" :disabled="!tweetContent">Post</UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhotoIcon, GifIcon, ListBulletIcon, FaceSmileIcon } from '@heroicons/vue/24/outline'

const tweetContent = ref('')
</script>