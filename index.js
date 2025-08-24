import {App} from "./server/App.js";
import router from "./router.js";
import parseHead from "./middlewares/parseHead.js";
import parseUrl from "./middlewares/parseUrl.js";
import parseJson from "./middlewares/parseJson.js";
import dotenv from 'dotenv';
dotenv.config()
let PORT = process.env.PORT || 8080;
const app = new App();
app.addRouter(router);
app.use(parseHead);
app.use(parseUrl('http://localhost:3000'));
app.use(parseJson)
app.listen(PORT);