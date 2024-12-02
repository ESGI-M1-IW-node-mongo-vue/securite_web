<template>
  <div class="border-x border-gray-200 min-h-screen">
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div class="flex justify-between items-center px-4 py-3">
          <h1 class="text-xl font-bold">Home</h1>
          <h2 class="text-blue-600 font-bold"><NuxtLink to="/profile">My Profile</NuxtLink></h2>
      </div>
    </div>
    <HomeTweetComposer />
    <div class="divide-y divide-gray-200">
      <HomeTweet v-for="tweet in tweets" :key="tweet.id" v-bind="tweet" />
    </div>
  </div>
</template>

<script setup lang="ts">
const tweets = [
  {
    id: 1,
    author: 'Sarah Johnson',
    handle: '@sarahj',
    content: 'Just launched my new portfolio website! Check it out at example.com 🚀 #webdev #portfolio',
    avatar: 'https://placehold.co/400',
    time: new Date()
  },
  {
    id: 2,
    author: 'Tech News',
    handle: '@technews',
    content: 'Breaking: Major updates coming to Vue 3 ecosystem! New features include improved performance and developer experience. #vuejs #webdev',
    avatar: 'https://placehold.co/400',
    likes: 231,
    retweets: 89,
    replies: 24,
    time: new Date()
  }
]
</script>