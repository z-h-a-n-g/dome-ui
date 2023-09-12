import { createApp } from "vue";
import App from "./app.vue";
import Asenui from "asen-ui-vue3";

const app = createApp(App);
app.use(Asenui);
app.mount("#app");
