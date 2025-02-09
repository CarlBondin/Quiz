<template>
  <QuizResults
      v-if="showModal"
      :score="score"
      :totalQuestions="totalQuestions"
      :betterThan="betterThan"
      @close="showModal = false"
  />

  <div class="parallax-container">
    <QuizGame @submitQuiz="handleSubmitQuiz" />
  </div>
</template>

<script>
import QuizGame from '@/components/views/QuizGame.vue';
import QuizResults from '@/components/views/QuizResults.vue';

export default {
  components: { QuizGame, QuizResults },
  data() {
    return {
      showModal: false,
      score: null,
      totalQuestions: null,
      betterThan: null
    };
  },
  methods: {
    handleSubmitQuiz(result) {
      this.score = result.score;
      this.totalQuestions = result.totalQuestions;
      this.betterThan = result.betterThan;
      this.showModal = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>
