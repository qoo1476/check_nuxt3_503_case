<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (title) => `MY PAGE | ${title}`,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
