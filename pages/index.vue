<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Navbar />
      <Logo />
      <div class="lg:w-2/5 hidden md:inline-flex lg:justify-end ml-5 lg:ml-0">
        <button
          class="hidden md:inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          {{ $t("cta_button") }}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-14 md:py-24 items-center justify-center flex-col">
      <img class="h-[25vh] mb-10 object-cover object-center rounded" alt="hero" :src="profile" />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {{ $t("hero.heading") }}
        </h1>
        <h1 class="title-font sm:text-2xl text-xl mb-4 text-gray-900">
          Ayoub ELMAHDAOUI
        </h1>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {{ $t("cta_button") }}
          </button>
          <button
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            {{ $t("about.title") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// @ts-ignore
import profile from "../assets/img/profile.jpeg";
</script>
