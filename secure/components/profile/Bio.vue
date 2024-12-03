<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <p class="text-gray-700 mt-4">
      Full-stack developer passionate about creating amazing web experiences.
      Building the future of the web, one commit at a time. 🚀
    </p>
    <div class="flex items-center space-x-4 mt-3 text-gray-500">
      <div class="flex items-center space-x-1">
        <CalendarIcon class="h-5 w-5" />
        <span>Joined {{ formatDate(new Date('2021-09-16')) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon } from '@heroicons/vue/24/outline'
import { formatDate } from '~/utils/format'
</script>