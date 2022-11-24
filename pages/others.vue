<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomePageDataUrl1", {})).data;
});

useHead({
  title: "others",
});
</script>

<template>
  <div>PAGE: OTHERS</div>
  <div>PAGE DATA: {{ data }}</div>
</template>
