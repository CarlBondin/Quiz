<template>
  <div class="quiz-container">
    <h1 class="title">Sports Quiz</h1>

    <div v-for="(q, index) in questions" :key="q.id" class="question-card">
      <p class="question-text">{{ index + 1 }}. {{ q.text }}</p>

      <div class="options">
        <label
          v-for="(opt, optIndex) in q.options"
          :key="`${q.id}-${optIndex}-${reviewMode}`"
          class="option-label"
          :class="{
          'selected': q.selected === opt,
          'correct-answer': reviewMode && q.correct === opt,
          'incorrect-answer': reviewMode && q.selected === opt && q.selected !== q.correct
          }"
        >
        <input
          type="radio"
          :name="`question-${q.id}`"
          :value="opt"
          @change="selectAnswer(q.id, opt)"
          :checked="q.selected === opt"
          :disabled="reviewMode"
          />
          {{ opt }}
        </label>
      </div>
    </div>

    <button v-if="!reviewMode" @click="submitQuiz" class="submit-button">Submit</button>
    <button v-else @click="restartQuiz" class="submit-button">Retake Quiz</button>
  </div>

  <QuizModal
      v-if="showModal"
      :score="score"
      :totalQuestions="totalQuestions"
      :betterThan="betterThan"
      @close="reviewAnswers"
      @restart="restartQuiz"
  />
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import QuizModal from "@/components/views/QuizResults.vue";

export default {
  components: { QuizModal },
  data() {
    return {
      showModal: false,
      reviewMode: false,
    };
  },
  computed: {
    ...mapState(["questions", "score"]),
    ...mapGetters(["totalQuestions", "betterThanPercentage"]),
    betterThan() {
      return this.betterThanPercentage;
    }
  },
  methods: {
    ...mapMutations(["SELECT_ANSWER", "CALCULATE_SCORE", "RESET_QUIZ"]),
    selectAnswer(questionId, answer) {
      if (!this.reviewMode) {
        this.SELECT_ANSWER({ questionId, answer });
      }
    },
    submitQuiz() {
      this.CALCULATE_SCORE();
      this.showModal = true;
    },
    reviewAnswers() {
      this.showModal = false;
      this.reviewMode = true;
    },
    restartQuiz() {
      this.RESET_QUIZ();
      this.showModal = false;
      this.reviewMode = false;
    }
  }
};
</script>
