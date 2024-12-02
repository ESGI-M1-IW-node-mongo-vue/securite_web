<template>
  <div class="max-w-screen-lg mx-auto">
      <ProfileHeader />
      <ProfileBio />
      <ProfileTabs />
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