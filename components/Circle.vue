<template>
  <div class="container">
    <p>a = <input type="number" v-model="r" /></p>
    <p>
      P = <span>{{ P }}</span>
    </p>
    <p>
      S = <span>{{ S }}</span>
    </p>
    <button class="btn-primary btn" @click="res">Result</button>
  </div>
</template>
<script setup>
const r = ref();

const P = ref();
const S = ref();

function res() {
  P.value = (2 * Math.PI * r.value).toFixed(2);
  S.value = (Math.PI * Math.pow(r.value, 2)).toFixed(2);
}
</script>
<style lang="scss"></style>
