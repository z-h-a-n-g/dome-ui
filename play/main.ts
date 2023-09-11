import { createApp } from "vue";
import App from "./app.vue";
import easyest from "@lz-ui/components";
const app = createApp(App);
app.use(easyest);
app.mount("#app");
