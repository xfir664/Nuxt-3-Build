<template>
  <div>
    <Sqare />
    <Rectangle />
    <Circle />
  </div>
</template>
<script setup>
import Sqare from "~/components/Sqare.vue";
import Rectangle from "~/components/Rectangle.vue";
import Circle from "~/components/Circle.vue";
</script>
<style scoped lang="scss">
.btn {
  color: $primary-color;
}
</style>
