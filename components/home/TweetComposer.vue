<template>
  <div class="p-4 border-b border-gray-200">
    <div class="flex space-x-4">
      <img
          src="https://placehold.co/400"
          alt="Your avatar"
          class="h-12 w-12 rounded-full"
      />
      <div class="flex flex-col w-full">
        <textarea
            v-model="tweetContent"
            rows="3"
            class="w-full border-0 focus:ring-0 text-lg placeholder:text-gray-500 resize-none"
            placeholder="What is happening?!"
        ></textarea>
        <UiButton class="self-end" variant="primary" :disabled="!tweetContent">Post</UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tweetContent = ref('')
</script>