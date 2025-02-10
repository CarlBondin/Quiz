import { createSSRApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import store from "./store/index.js";

export function createApp() {
  const app = createSSRApp(App);
  const head = createHead();

  app.use(store);
  app.use(head);

  return app;
}
