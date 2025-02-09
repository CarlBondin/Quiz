import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import store from "./store";
import "@/assets/styles.less";

const app = createApp(App);
const head = createHead();

app.use(store);
app.use(head);
app.mount("#app");
