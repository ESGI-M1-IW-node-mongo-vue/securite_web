<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div class="flex justify-between items-center px-4 py-3">
        <h1 class="text-xl font-bold">
          <NuxtLink to="/vulnerable/public">Home</NuxtLink>
        </h1>
        <h2 class="text-blue-600 font-bold">
          <NuxtLink to="/profile/[id]">My Profile</NuxtLink>
        </h2>
      </div>
    </div>
    <ProfileHeader v-if="userData != null" :data="userData"/>
    <ProfileBio/>
    <ProfileTabs/>
    <div class="divide-y divide-gray-200">
      <HomeTweet v-for="tweet in tweets" :key="tweet.id" :author="userData.name" :content="tweet.content"
                 :time="tweet.created_at"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const userData = ref(null);
const tweets = ref([]);

const fetchMyTweets = async () => {
  const accessToken = localStorage.getItem("token");
  const res = await fetch('/api/tweets/me', {
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`},
  });
  tweets.value = await res.json();
}

onMounted(fetchMyTweets);


if (import.meta.client) {
  const res = await fetch('/api/me/' + route.params.id);

  const data = await res.json();

  userData.value = data.user;
}

</script>