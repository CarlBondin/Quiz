import { createStore } from "vuex";

const previousScores = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("scores")) || []
    : [];

export default createStore({
  state: {
    questions: [
      {
        id: 1,
        text: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "France", "Brazil", "Argentina"],
        correct: "France",
        selected: null,
      },
      {
        id: 2,
        text: "How many players are on the field for each team in a standard soccer match?",
        options: ["9", "10", "11", "12"],
        correct: "11",
        selected: null,
      },
      {
        id: 3,
        text: "Which sport is known as the 'King of Sports'?",
        options: ["Basketball", "Cricket", "Soccer", "Tennis"],
        correct: "Soccer",
        selected: null,
      },
      {
        id: 4,
        text: "Which country has won the most Olympic gold medals in history?",
        options: ["China", "USA", "Russia", "Germany"],
        correct: "USA",
        selected: null,
      },
      {
        id: 5,
        text: "Who has won the most Grand Slam titles in men's tennis?",
        options: [
          "Rafael Nadal",
          "Roger Federer",
          "Novak Djokovic",
          "Pete Sampras",
        ],
        correct: "Novak Djokovic",
        selected: null,
      },
      {
        id: 6,
        text: "In basketball, how many points is a free throw worth?",
        options: ["1", "2", "3", "4"],
        correct: "1",
        selected: null,
      },
      {
        id: 7,
        text: "Which American football team has won the most Super Bowls?",
        options: [
          "Dallas Cowboys",
          "San Francisco 49ers",
          "New England Patriots",
          "Pittsburgh Steelers",
        ],
        correct: "New England Patriots",
        selected: null,
      },
      {
        id: 8,
        text: "What is the maximum number of sets in a men's Grand Slam tennis match?",
        options: ["3", "4", "5", "6"],
        correct: "5",
        selected: null,
      },
      {
        id: 9,
        text: "Which athlete is known as 'The Fastest Man Alive'?",
        options: ["Carl Lewis", "Usain Bolt", "Michael Johnson", "Tyson Gay"],
        correct: "Usain Bolt",
        selected: null,
      },
      {
        id: 10,
        text: "What is the name of the trophy awarded to the NHL champion?",
        options: [
          "The Lombardi Trophy",
          "The Stanley Cup",
          "The Claret Jug",
          "The Heisman Trophy",
        ],
        correct: "The Stanley Cup",
        selected: null,
      },
    ],
    score: null,
    previousScores: previousScores,
  },
  mutations: {
    SELECT_ANSWER(state, { questionId, answer }) {
      const question = state.questions.find((q) => q.id === questionId);
      if (question) question.selected = answer;
    },
    CALCULATE_SCORE(state) {
      state.score = state.questions.filter(
        (q) => q.selected === q.correct,
      ).length;
      state.previousScores.push(state.score);
      localStorage.setItem("scores", JSON.stringify(state.previousScores));
    },
    RESET_QUIZ(state) {
      state.questions.forEach((q) => (q.selected = null));
      state.score = null;
    },
  },
  getters: {
    totalQuestions: (state) => state.questions.length,
    betterThanPercentage: (state) => {
      if (state.previousScores.length < 2) return null;
      const lowerScores = state.previousScores.filter(
        (s) => s < state.score,
      ).length;
      return Math.round((lowerScores / state.previousScores.length) * 100);
    },
  },
});
