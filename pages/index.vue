<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <Navbar />
      <Logo />
      <div class="lg:w-2/5 hidden md:inline-flex lg:justify-end ml-5 lg:ml-0">
        <button
          class="hidden md:inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {{ $t("cta_button") }}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!--
    <div class="hidden md:block fixed bottom-0 right-0 p-4">
    <button
      class="w-24 h-24 inline-block text-white bg-indigo-500 border-0 my-auto pt-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
    >
      <svg
        viewBox="0 0 24 24"
        style="width: 24px; height: 24px"
        class="hidden sm:inline mb-1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      <span class="tab tab-account block text-xs">
        {{ $t("cta_button") }}
      </span>
    </button>
  </div>
  -->

  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-14 md:py-24 items-center justify-center flex-col"
    >
      <img
        class="h-[25vh] mb-10 object-cover object-center rounded"
        alt="hero"
        :src="profile"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          {{ $t("hero.heading") }}
        </h1>
        <h1 class="title-font sm:text-2xl text-xl mb-4 text-gray-900">
          Ayoub ELMAHDAOUI
        </h1>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {{ $t("cta_button") }}
          </button>
          <button
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            {{ $t("about.title") }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20"
        v-html="$t('work.heading')"
      ></h1>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div
          v-for="item in work"
          :key="item.id"
          class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden"
        >
          <a
            href="#"
            class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          </a>

          <div class="flex flex-col gap-2 p-4 lg:p-6">
            <h2 class="text-gray-800 text-xl font-bold">
              <a
                href="#"
                class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >{{ item.name }}</a
              >
            </h2>

            <p class="text-gray-500">
              {{ item.short_details }}
            </p>

            <div>
              <a
                :aria-disabled="true"
                :href="item.type == 'a' ? '#' : ''"
                :class="{
                  'opacity-80': item.type == 'b',
                }"
                @click="
                  (e) => {
                    if (item.type == 'b') {
                      e.preventDefault();
                    }
                  }
                "
                class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
              >
                Read more
              </a>

              <div class="-mx-0.5 pt-1">
                <span
                  class="text-center inline-block bg-indigo-600 text-white px-2 py-1 mx-1 rounded"
                  v-for="tag in item.tags"
                >
                  {{ tag }}
                </span>
                <span
                  v-if="item.type === 'b'"
                  class="text-center inline-block bg-red-400 text-white px-2 py-1 mx-1 rounded"
                >
                  Closed Source
                </span>
                <span
                  v-else
                  class="text-center inline-block bg-indigo-600 text-white px-2 py-1 mx-1 rounded"
                >
                  Open Source
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20"
        v-html="$t('services.heading')"
      ></h1>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div v-for="item in services" class="p-4 md:w-1/3 flex">
          <div
            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {{ item.name }}
            </h2>
            <p class="leading-relaxed text-base">
              {{ item.headline }}
            </p>
            <a
              class="mt-3 text-indigo-500 inline-flex items-center"
              data-ur1313m3t="true"
              >{{ $t("learn_more") }}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          {{ $t("projects.title") }}
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-for="project in publicRepos" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              {{ project.repo }}
            </h2>
            <p class="leading-relaxed text-base">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          {{ $t("contact.title") }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">
                {{ $t("contact.labels.name") }}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">
                {{ $t("contact.labels.email") }}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">
                {{ $t("contact.labels.message") }}
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {{ $t("contact.labels.submit") }}
            </button>
          </div>
          <div
            class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <a
              href="mailto:ayoubelmahdaoui97@gmail.com"
              class="block mb-5 text-indigo-500"
              data-ur1313m3t="true"
            >
              ayoubelmahdaoui97@gmail.com
            </a>
            <span class="inline-flex">
              <a class="text-gray-500" data-ur1313m3t="true">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500" data-ur1313m3t="true">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500" data-ur1313m3t="true">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500" data-ur1313m3t="true">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div>
    <div v-for="post in posts" :key="post.id">
      <p>
        {{ post.title }}
      </p>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
// @ts-ignore
import profile from "../assets/img/profile.jpeg";
import work from "../assets/data/work";
import services from "../assets/data/services";

interface GitHubPinnedRepo {
  owner: string;
  repo: string;
  description?: string;
  link: string;
  image: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}
const { data: publicRepos } = await useAsyncData<GitHubPinnedRepo[]>(() =>
  $fetch("https://gh-pinned-repos.egoist.dev/?username=ayoubmehd")
);
</script>
