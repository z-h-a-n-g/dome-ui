import DefaultTheme from "vitepress/theme";
import Asenui from "asen-ui-vue3";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(Asenui);
  },
};
