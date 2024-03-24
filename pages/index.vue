<template>
  <header class=" body-font">
    <div class="container mx-auto flex p-5 flex-col md:flex-row items-center">
      <!-- <Navbar /> -->
      <Logo />
      <div class="w-full hidden md:inline-flex lg:justify-end ml-auto lg:ml-0">
        <button
          class="hidden md:inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg    @apply bg-slate-900 text-white; bg-slatetext-lg">
          {{ $t("cta_button") }}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <section class="flex items-center h-[90vh] body-font">
    <div class="container mx-auto flex px-5 py-14 md:py-24 items-center justify-center flex-col">
      <!-- <img class="h-[25vh] mb-10 object-cover object-center rounded" alt="hero" :src="profile" /> -->
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
          {{ $t("hero.heading") }}
        </h1>
        <h1 class="title-font sm:text-2xl text-xl mb-4 ">
          {{ $t("hero.subheading") }}
        </h1>
        <div class="flex justify-center mb-4">
          <button
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {{ $t("cta_button") }}
          </button>
        </div>
        <!-- Social network icons container -->
        <div class="flex justify-center">
          <!-- <SocialMediaItem icon="facebook" label="Facebook" /> -->
          <SocialMediaItem href="https://twitter.com/0wl_97" icon="x" label="Twitter" />
          <!-- <SocialMediaItem icon="insta" label="Instagram" /> -->
          <SocialMediaItem href="https://www.linkedin.com/in/ayoub-mehd" icon="in" label="LinkedIn" />
          <SocialMediaItem href="https://github.com/ayoubmehd" icon="github" label="GitHub" />
        </div>
      </div>
    </div>
  </section>
</template>