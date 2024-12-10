<template>
  <div class="container">
    <p>a = <input type="number" v-model="a" /></p>
    <p>b = <input type="number" v-model="b" /></p>
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
const a = ref();
const b = ref();

const P = ref();
const S = ref();

function res() {
  P.value = 2 * (Number(a.value) + Number(b.value));
  S.value = a.value * b.value;
}
</script>
<style lang="scss"></style>
