import { createApp } from "vue";
import App from "./App.vue";

// 引入 varlet UI
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style.js";

import "amfe-flexible/index.js";

createApp(App).use(Varlet).mount("#app");
