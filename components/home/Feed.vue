<template>
  <div class="border-x border-gray-200 min-h-screen">
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div class="flex justify-between items-center px-4 py-3">
        <h1 class="text-xl font-bold">Home</h1>
        <h2 class="text-blue-600 font-bold">
          <NuxtLink to="/profile">My Profile</NuxtLink>
        </h2>
      </div>
    </div>
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
          <UiButton @click="postTweet" class="self-end" variant="primary" :disabled="!tweetContent">Post</UiButton>
        </div>
      </div>
    </div>
    <div class="divide-y divide-gray-200">
      <HomeTweet v-for="tweet in tweets" :key="tweet.id" v-bind="tweet"/>
    </div>
  </div>
</template>

<script setup lang="ts">

const tweetContent = ref('')
const tweets = ref([])


const updateFeed = async () => {
  const res = await fetch('http://localhost:3000/api/tweets', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })

  if (!res.ok) {
    console.error('Failed to fetch tweets')
    return
  }

  tweets.value = await res.json()
}

onMounted(updateFeed)

const postTweet = async () => {
  if (!tweetContent.value) return
  const newTweet = {
    content: tweetContent.value,
  }

  const res = await fetch('http://localhost:3000/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify(newTweet)
  })

  if (!res.ok) {
    console.error('Failed to post tweet')
    return
  }

  const data = await res.json()

  tweets.value.unshift(newTweet)
  tweetContent.value = ''

}
</script>
