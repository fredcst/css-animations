import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import "./assets/css/about.css";
import "./assets/css/animations.css";
import "./assets/css/accordion.css";

createApp(App).use(router).mount("#app");
