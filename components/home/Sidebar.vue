<template>
  <aside class="w-full lg:w-80 xl:w-96 px-4">
    <div class="sticky top-0 py-4">
      <div class="bg-gray-50 rounded-2xl p-4 mb-4">
        <h2 class="text-xl font-bold mb-4">Subscribe to Premium</h2>
        <p class="mb-3">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <UiButton variant="primary">Subscribe</UiButton>
      </div>

      <div class="bg-gray-50 rounded-2xl p-4">
        <h2 class="text-xl font-bold mb-4">What's happening</h2>
        <div class="space-y-4">
          <div v-for="trend in trends" :key="trend.tag" class="cursor-pointer hover:bg-gray-100 p-2 rounded">
            <div class="text-sm text-gray-500">{{ trend.category }}</div>
            <div class="font-bold">{{ trend.tag }}</div>
            <div class="text-sm text-gray-500">{{ trend.posts }} posts</div>
          </div>
        </div>
        <button class="text-blue-500 hover:text-blue-600 mt-4">Show more</button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const trends = [
  { category: 'Technology', tag: '#WebDev', posts: '12.4K' },
  { category: 'Trending', tag: '#NuxtJS', posts: '5.2K' },
  { category: 'Programming', tag: '#TypeScript', posts: '8.7K' },
]
</script>