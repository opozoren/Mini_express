import {Router} from "../Router.js";
const router = new Router();
router.get('/',(req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json,text/plain'});
    res.end("Hello / ");
})
router.get('/users',(req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json,text/plain'});
    res.end("Hello /users");
})
router.get('/posts',(req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json,text/plain'});
    res.end("Hello /posts");
})
export default router;