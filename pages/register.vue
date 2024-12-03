<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
          class="h-full w-12 m-auto"
      >
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div class="mt-2">
            <input
                v-model="username"
                id="username"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div class="mt-2">
            <input
                v-model="email"
                id="email"
                type="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div class="mt-2">
            <input
                v-model="password"
                id="password"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
          <div class="mt-2">
            <input
                v-model="confirmPassword"
                id="confirmPassword"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>

        <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Register
        </button>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <router-link to="/login" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">
          Sign in
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const username = ref('')
const error = ref('')
const router = useRouter()

const handleSubmit = async () => {
  error.value = '';

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: username.value,
      }),
    });

    if (!res.ok) {
      const message = await res.json();
      error.value = `Error: ${message.message}`;
      return;
    }

    const { token } = await res.json();

    if (token) {
      localStorage.setItem('token', token);
      await router.push('/');
    }
  } catch (err) {
    console.error('Client error:', err);
    error.value = 'An error occurred during registration. Please try again.';
  }
};
</script>
