<template>
  <div class="max-w-screen-lg mx-auto">
      <ProfileHeader />
      <ProfileBio />
      <ProfileStats />
      <ProfileTabs />
      <div class="divide-y divide-gray-200">
        <ProfilePost>
          Just deployed a new feature using @nuxt/ui! The developer experience is amazing. 🚀 #webdev #nuxtjs
        </ProfilePost>
        <ProfilePost>
          Working on some exciting new projects. Can't wait to share more details soon! 👨‍💻 #coding #development
        </ProfilePost>
        <ProfilePost>
          Learning something new every day. Today's focus: Advanced TypeScript patterns and best practices. 📚 #typescript #learning
        </ProfilePost>
      </div>
  </div>
</template>
<script setup lang="ts">
</script>