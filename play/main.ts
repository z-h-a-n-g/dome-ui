import { createApp } from "vue";
import App from "./app.vue";
import Asenui from "@lz-ui/components";
const app = createApp(App);
app.use(Asenui);
app.mount("#app");
