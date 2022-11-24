<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/someUrl1", {})).data;
});
</script>

<template>
  <div>
    <h1>TITLE</h1>
    <ul>
      <li>
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
      <li>
        <NuxtLink to="others">OTHERS</NuxtLink>
      </li>
    </ul>
    <div>
      <span>{{ data }}</span>
      <slot name="default" />
    </div>
  </div>
</template>
