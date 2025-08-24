import {Router} from "./server/Router.js";
const router = new Router();
router.get('/',(req, res) => {
    res.end("Hello /");
})
router.get('/users',(req, res) => {
    if(req.params.id === '1'){
        res.end("Hello /users/1");
    }else {
        res.end("Hello /users");
    }
})
router.get('/posts',(req, res) => {
    res.end("Hello /posts");
})
export default router;