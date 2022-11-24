<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomeComponentDataUrl5", {})).data;
});
const { data: data2, pending: pending2 } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomeComponentDataUrl5_2", {})).data;
});
</script>

<template>
  <div class="dataShow">
    <div v-if="pending">Loading...</div>
    <div v-else>COMPONENT5: {{ data }}</div>
    <div v-if="pending2">Loading...</div>
    <div v-else>COMPONENT5_2: {{ data2 }}</div>
  </div>
</template>
