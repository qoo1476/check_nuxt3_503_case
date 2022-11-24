<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomePageDataUrl1", {})).data;
});

useHead({
  title: "index",
});
</script>

<template>
  <div>PAGE: INDEX</div>
  <div>PAGE DATA: {{ data }}</div>
  <MyComponent1 />
  <MyComponent2 />
  <MyComponent3 />
  <MyComponent4 />
  <MyComponent5 />
</template>

<style>
.dataShow {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 5px;
}
</style>
