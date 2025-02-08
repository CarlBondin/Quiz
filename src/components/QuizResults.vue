<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Quiz Results</h2>
      <p class="score-text">
        You got <strong>{{ score }}</strong> out of <strong>{{ totalQuestions }}</strong> correct!
      </p>
      <p v-if="betterThan !== null" class="comparison-text">
        You did better than <strong>{{ betterThan }}%</strong> of users.
      </p>
      <div class="modal-buttons">
        <button @click="$emit('close')" class="close-button">Review Answers</button>
        <button @click="$emit('restart')" class="retake-button">Retake Quiz</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: Number,
    totalQuestions: Number,
    betterThan: Number
  }
};
</script>
