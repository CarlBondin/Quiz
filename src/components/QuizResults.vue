<template>
  <div class="modal-overlay" :class="{ 'perfect-score': isPerfectScore }">
    <div class="modal-content" :class="{ 'glowing': isPerfectScore }">
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
    <canvas v-if="isPerfectScore" ref="confettiCanvas" class="confetti-canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    score: Number,
    totalQuestions: Number,
    betterThan: Number
  },
  computed: {
    isPerfectScore() {
      return this.score === this.totalQuestions;
    }
  },
  mounted() {
    if (this.isPerfectScore) {
      this.startConfetti();
    }
  },
  methods: {
    startConfetti() {
      const canvas = this.$refs.confettiCanvas;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let confetti = [];
      for (let i = 0; i < 150; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 2,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 + 2,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
      }

      function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c) => {
          ctx.fillStyle = c.color;
          ctx.fillRect(c.x, c.y, c.size, c.size);
          c.y += c.speedY;
          c.x += c.speedX;
          if (c.y > canvas.height) c.y = -10;
        });
        requestAnimationFrame(drawConfetti);
      }
      drawConfetti();
    }
  }
};
</script>
