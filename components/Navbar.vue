<template>
  <nav class="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <a class="mr-5 hover:text-gray-900">{{ $t("home") }}</a>
    <a class="mr-5 hover:text-gray-900">{{ $t("work") }}</a>
    <a class="mr-5 hover:text-gray-900">{{ $t("about.title") }}</a>
    <a class="hover:text-gray-900">{{ $t("contact.title") }}</a>
  </nav>

  <!-- component -->
  <div class="md:hidden w-full">
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-gray-100 shadow">
      <div id="tabs" class="flex justify-between">
        <BottomNavLink icon="home" :label="$t('home')" />
        <BottomNavLink icon="work" :label="$t('work')" />
        <div class="w-full inline-flex justify-center pt-2 pb-1">
          <button
            class="inline-block text-white bg-indigo-500 border-0 my-auto pt-1 pb-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <svg viewBox="0 0 24 24" style="width: 24px; height: 24px" class="hidden sm:inline mb-1" fill="none"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            <span class="tab tab-account block text-xs">
              {{ $t("cta_button") }}
            </span>
          </button>
        </div>
        <BottomNavLink icon="about" :label="$t('about.title')" />
        <BottomNavLink icon="contact" :label="$t('contact.title')" />
      </div>
    </section>
  </div>
</template>

<script lang="tsx" setup>
import BottomNavLink from "./BottomNavLink.vue";
</script>
