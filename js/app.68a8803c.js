(function () {
  "use strict";
  var e = {
      9429: function (e, t, o) {
        var n = o(5130),
          s = o(7899),
          r = o(6768);
        const i = { class: "parallax-container" };
        function a(e, t, o, n, s, a) {
          const l = (0, r.g2)("QuizResults"),
            u = (0, r.g2)("QuizGame");
          return (
            (0, r.uX)(),
            (0, r.CE)(
              r.FK,
              null,
              [
                s.showModal
                  ? ((0, r.uX)(),
                    (0, r.Wv)(
                      l,
                      {
                        key: 0,
                        score: s.score,
                        totalQuestions: s.totalQuestions,
                        betterThan: s.betterThan,
                        onClose: t[0] || (t[0] = (e) => (s.showModal = !1)),
                      },
                      null,
                      8,
                      ["score", "totalQuestions", "betterThan"],
                    ))
                  : (0, r.Q3)("", !0),
                (0, r.Lk)("div", i, [
                  t[1] ||
                    (t[1] = (0, r.Lk)(
                      "div",
                      { class: "parallax-bg" },
                      null,
                      -1,
                    )),
                  (0, r.bF)(u, { onSubmitQuiz: a.handleSubmitQuiz }, null, 8, [
                    "onSubmitQuiz",
                  ]),
                ]),
              ],
              64,
            )
          );
        }
        var l = o(4232);
        const u = { class: "quiz-container" },
          c = { class: "question-text" },
          h = { class: "options" },
          d = ["name", "value", "onChange", "checked", "disabled"];
        function p(e, t, o, n, s, i) {
          const a = (0, r.g2)("QuizModal");
          return (
            (0, r.uX)(),
            (0, r.CE)(
              r.FK,
              null,
              [
                (0, r.Lk)("div", u, [
                  t[2] ||
                    (t[2] = (0, r.Lk)(
                      "h1",
                      { class: "title" },
                      "Sports Quiz",
                      -1,
                    )),
                  ((0, r.uX)(!0),
                  (0, r.CE)(
                    r.FK,
                    null,
                    (0, r.pI)(
                      e.questions,
                      (e, t) => (
                        (0, r.uX)(),
                        (0, r.CE)(
                          "div",
                          { key: e.id, class: "question-card" },
                          [
                            (0, r.Lk)(
                              "p",
                              c,
                              (0, l.v_)(t + 1) + ". " + (0, l.v_)(e.text),
                              1,
                            ),
                            (0, r.Lk)("div", h, [
                              ((0, r.uX)(!0),
                              (0, r.CE)(
                                r.FK,
                                null,
                                (0, r.pI)(
                                  e.options,
                                  (t, o) => (
                                    (0, r.uX)(),
                                    (0, r.CE)(
                                      "label",
                                      {
                                        key: `${e.id}-${o}-${s.reviewMode}`,
                                        class: (0, l.C4)([
                                          "option-label",
                                          {
                                            selected: e.selected === t,
                                            "correct-answer":
                                              s.reviewMode && e.correct === t,
                                            "incorrect-answer":
                                              s.reviewMode &&
                                              e.selected === t &&
                                              e.selected !== e.correct,
                                          },
                                        ]),
                                      },
                                      [
                                        (0, r.Lk)(
                                          "input",
                                          {
                                            type: "radio",
                                            name: `question-${e.id}`,
                                            value: t,
                                            onChange: (o) =>
                                              i.selectAnswer(e.id, t),
                                            checked: e.selected === t,
                                            disabled: s.reviewMode,
                                          },
                                          null,
                                          40,
                                          d,
                                        ),
                                        (0, r.eW)(" " + (0, l.v_)(t), 1),
                                      ],
                                      2,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                  s.reviewMode
                    ? ((0, r.uX)(),
                      (0, r.CE)(
                        "button",
                        {
                          key: 1,
                          onClick:
                            t[1] ||
                            (t[1] = (...e) =>
                              i.restartQuiz && i.restartQuiz(...e)),
                          class: "submit-button",
                        },
                        "Retake Quiz",
                      ))
                    : ((0, r.uX)(),
                      (0, r.CE)(
                        "button",
                        {
                          key: 0,
                          onClick:
                            t[0] ||
                            (t[0] = (...e) =>
                              i.submitQuiz && i.submitQuiz(...e)),
                          class: "submit-button",
                        },
                        "Submit",
                      )),
                ]),
                s.showModal
                  ? ((0, r.uX)(),
                    (0, r.Wv)(
                      a,
                      {
                        key: 0,
                        score: e.score,
                        totalQuestions: e.totalQuestions,
                        betterThan: i.betterThan,
                        onClose: i.reviewAnswers,
                        onRestart: i.restartQuiz,
                      },
                      null,
                      8,
                      [
                        "score",
                        "totalQuestions",
                        "betterThan",
                        "onClose",
                        "onRestart",
                      ],
                    ))
                  : (0, r.Q3)("", !0),
              ],
              64,
            )
          );
        }
        var v = o(782);
        const b = { class: "modal-overlay" },
          m = { class: "modal-content" },
          f = { class: "score-text" },
          w = { key: 0, class: "comparison-text" },
          k = { class: "modal-buttons" };
        function C(e, t, o, n, s, i) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", b, [
              (0, r.Lk)("div", m, [
                t[7] || (t[7] = (0, r.Lk)("h2", null, "Quiz Results", -1)),
                (0, r.Lk)("p", f, [
                  t[2] || (t[2] = (0, r.eW)(" You got ")),
                  (0, r.Lk)("strong", null, (0, l.v_)(o.score), 1),
                  t[3] || (t[3] = (0, r.eW)(" out of ")),
                  (0, r.Lk)("strong", null, (0, l.v_)(o.totalQuestions), 1),
                  t[4] || (t[4] = (0, r.eW)(" correct! ")),
                ]),
                null !== o.betterThan
                  ? ((0, r.uX)(),
                    (0, r.CE)("p", w, [
                      t[5] || (t[5] = (0, r.eW)(" You did better than ")),
                      (0, r.Lk)(
                        "strong",
                        null,
                        (0, l.v_)(o.betterThan) + "%",
                        1,
                      ),
                      t[6] || (t[6] = (0, r.eW)(" of users. ")),
                    ]))
                  : (0, r.Q3)("", !0),
                (0, r.Lk)("div", k, [
                  (0, r.Lk)(
                    "button",
                    {
                      onClick: t[0] || (t[0] = (t) => e.$emit("close")),
                      class: "close-button",
                    },
                    "Review Answers",
                  ),
                  (0, r.Lk)(
                    "button",
                    {
                      onClick: t[1] || (t[1] = (t) => e.$emit("restart")),
                      class: "retake-button",
                    },
                    "Retake Quiz",
                  ),
                ]),
              ]),
            ])
          );
        }
        var S = {
            props: {
              score: Number,
              totalQuestions: Number,
              betterThan: Number,
            },
          },
          Q = o(1241);
        const g = (0, Q.A)(S, [["render", C]]);
        var T = g,
          y = {
            components: { QuizModal: T },
            data() {
              return { showModal: !1, reviewMode: !1 };
            },
            computed: {
              ...(0, v.aH)(["questions", "score"]),
              ...(0, v.L8)(["totalQuestions", "betterThanPercentage"]),
              betterThan() {
                return this.betterThanPercentage;
              },
            },
            methods: {
              ...(0, v.PY)(["SELECT_ANSWER", "CALCULATE_SCORE", "RESET_QUIZ"]),
              selectAnswer(e, t) {
                this.reviewMode ||
                  this.SELECT_ANSWER({ questionId: e, answer: t });
              },
              submitQuiz() {
                this.CALCULATE_SCORE(), (this.showModal = !0);
              },
              reviewAnswers() {
                (this.showModal = !1), (this.reviewMode = !0);
              },
              restartQuiz() {
                this.RESET_QUIZ(),
                  (this.showModal = !1),
                  (this.reviewMode = !1);
              },
            },
          };
        const E = (0, Q.A)(y, [["render", p]]);
        var L = E,
          z = {
            components: { QuizGame: L, QuizResults: T },
            data() {
              return {
                showModal: !1,
                score: null,
                totalQuestions: null,
                betterThan: null,
              };
            },
            methods: {
              handleSubmitQuiz(e) {
                (this.score = e.score),
                  (this.totalQuestions = e.totalQuestions),
                  (this.betterThan = e.betterThan),
                  (this.showModal = !0),
                  window.scrollTo({ top: 0, behavior: "smooth" });
              },
            },
          };
        const M = (0, Q.A)(z, [["render", a]]);
        var A = M,
          x =
            (o(4114),
            o(8992),
            o(4520),
            o(2577),
            o(3949),
            (0, v.y$)({
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
                    options: [
                      "Carl Lewis",
                      "Usain Bolt",
                      "Michael Johnson",
                      "Tyson Gay",
                    ],
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
                previousScores:
                  JSON.parse(localStorage.getItem("scores")) || [],
              },
              mutations: {
                SELECT_ANSWER(e, { questionId: t, answer: o }) {
                  const n = e.questions.find((e) => e.id === t);
                  n && (n.selected = o);
                },
                CALCULATE_SCORE(e) {
                  (e.score = e.questions.filter(
                    (e) => e.selected === e.correct,
                  ).length),
                    e.previousScores.push(e.score),
                    localStorage.setItem(
                      "scores",
                      JSON.stringify(e.previousScores),
                    );
                },
                RESET_QUIZ(e) {
                  e.questions.forEach((e) => (e.selected = null)),
                    (e.score = null);
                },
              },
              getters: {
                totalQuestions: (e) => e.questions.length,
                betterThanPercentage: (e) => {
                  if (e.previousScores.length < 2) return null;
                  const t = e.previousScores.filter((t) => t < e.score).length;
                  return Math.round((t / e.previousScores.length) * 100);
                },
              },
            }));
        const R = (0, n.Ef)(A),
          W = (0, s.Zf)();
        R.use(x), R.use(W), R.mount("#app");
      },
    },
    t = {};
  function o(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = e),
    (function () {
      var e = [];
      o.O = function (t, n, s, r) {
        if (!n) {
          var i = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (n = e[c][0]), (s = e[c][1]), (r = e[c][2]);
            for (var a = !0, l = 0; l < n.length; l++)
              (!1 & r || i >= r) &&
              Object.keys(o.O).every(function (e) {
                return o.O[e](n[l]);
              })
                ? n.splice(l--, 1)
                : ((a = !1), r < i && (i = r));
            if (a) {
              e.splice(c--, 1);
              var u = s();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        r = r || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
        e[c] = [n, s, r];
      };
    })(),
    (function () {
      o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (e, t) {
        for (var n in t)
          o.o(t, n) &&
            !o.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = { 524: 0 };
      o.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var s,
            r,
            i = n[0],
            a = n[1],
            l = n[2],
            u = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (s in a) o.o(a, s) && (o.m[s] = a[s]);
            if (l) var c = l(o);
          }
          for (t && t(n); u < i.length; u++)
            (r = i[u]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(c);
        },
        n = (self["webpackChunkquiz"] = self["webpackChunkquiz"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = o.O(void 0, [504], function () {
    return o(9429);
  });
  n = o.O(n);
})();
//# sourceMappingURL=app.68a8803c.js.map
