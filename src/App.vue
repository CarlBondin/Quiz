<template>
  <div class="parallax-container">
    <div class="parallax-bg"></div>
    <QuizGame />
  </div>
</template>

<script>
import QuizGame from '@/components/views/QuizGame.vue';
export default {
  components: { QuizGame }
};
</script>

<style lang="less">
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
}
</style>
