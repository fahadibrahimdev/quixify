<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-hero-bg py-40 xl:py-44 3xl:py-56">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-5 lg:gap-10 3xl:gap-10">
        <div class="flex flex-col justify-center text-black">
          <h1 class="text-4.5xl xl:text-5xl 3xl:text-6xl font-bold">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl xl:text-2xl 3xl:text-3xl pt-5 xl:pt-8">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-start justify-center">
          <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>
