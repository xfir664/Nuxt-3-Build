<template>
  <div class="container">
    <p>a = <input type="number" v-model="a" /></p>
    <p>P = <span>{{ P }}</span></p>
    <p>S = <span>{{ S }}</span></p>
    <button class="btn-primary btn" @click="res">Result</button>
  </div>
</template>
<script setup>
const a = ref();

const P = ref();
const S = ref();

function res() {
  P.value = a.value * 4;
  S.value = Math.pow(a.value, 2);
}
</script>
<style lang="scss"></style>
