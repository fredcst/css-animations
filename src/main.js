import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";
import "./assets/scss/about.scss";
import "./assets/scss/animations.scss";
import "./assets/scss/accordion.scss";

createApp(App).use(router).mount("#app");
