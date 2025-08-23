import {App} from "./App.js";
import router from "./app/router.js";

const app = new App();
app.addRouter(router);
app.listen(3000);