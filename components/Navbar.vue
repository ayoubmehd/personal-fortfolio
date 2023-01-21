<template>
  <nav
    class="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
  >
    <a class="mr-5 hover:text-gray-900">{{ $t("home") }}</a>
    <a class="mr-5 hover:text-gray-900">{{ $t("work") }}</a>
    <a class="mr-5 hover:text-gray-900">{{ $t("about.title") }}</a>
    <a class="hover:text-gray-900">{{ $t("contact.title") }}</a>
  </nav>

  <!-- component -->
  <div class="md:hidden w-full">
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-gray-100 shadow"
    >
      <div id="tabs" class="flex justify-between">
        <BotttomNavigationLink icon="home" :label="$t('home')" />
        <BotttomNavigationLink icon="work" :label="$t('work')" />
        <div class="w-full inline-flex justify-center pt-2 pb-1">
          <button
            class="inline-block text-white bg-indigo-500 border-0 my-auto pt-1 pb-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
        <BotttomNavigationLink icon="about" :label="$t('about.title')" />
        <BotttomNavigationLink icon="contact" :label="$t('contact.title')" />
      </div>
    </section>
  </div>
</template>

<script lang="tsx" setup>
const icons = {
  home: (
    <svg
      style="width:25px;height:25px"
      viewBox="0 0 24 24"
      class="inline-block mb-1"
    >
      <path
        fill="currentColor"
        d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
      />
    </svg>
  ),
  work: (
    <svg
      style="width:25px;height:25px"
      viewBox="0 0 24 24"
      class="inline-block mb-1"
    >
      <path
        fill="currentColor"
        d="M18 16H16V15H8V16H6V15H2V20H22V15H18V16M20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V14H6V12H8V14H16V12H18V14H22V10C22 8.9 21.1 8 20 8M15 8H9V6H15V8Z"
      />
    </svg>
  ),

  about: (
    <svg
      style="width:25px;height:25px"
      viewBox="0 0 24 24"
      class="inline-block mb-1"
    >
      <path
        fill="currentColor"
        d="M13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4A4,4 0 0,1 13,8M17,18V20H1V18C1,15.79 4.58,14 9,14C13.42,14 17,15.79 17,18M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5Z"
      />
    </svg>
  ),
  contact: (
    <svg
      style="width:25px;height:25px"
      viewBox="0 0 24 24"
      class="inline-block mb-1"
    >
      <path
        fill="currentColor"
        d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"
      />
    </svg>
  ),
};

type BotttomNavigationLinkProps = {
  icon: keyof typeof icons;
  label: string;
};

const BotttomNavigationLink = ({ icon, label }: BotttomNavigationLinkProps) => (
  <a
    href="#"
    class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
  >
    {icons[icon]}
    <span class="tab tab-account block text-xs">{label}</span>
  </a>
);
</script>
