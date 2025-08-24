import * as http from "node:http";
import EventEmitter from "events";
export class App{
    constructor(){
        this.middlewares = []
        this.emitter = new EventEmitter();
    }
    use(middleware){
        this.middlewares.push(middleware);
    }
    addRouter(router){
        for(let route in router.routes){
            const endpoint = router.routes[route];
            for(let method in endpoint){
                const mask = this.getRouteMask(route, method);
                this.emitter.on(mask,endpoint[method]);
            }
        }
    }
    parseMiddleWares(req,res){
        Object.values(this.middlewares).forEach(method=>{
            method(req,res)
        })
    }
    getRouteMask(path,method){
        return `[${path}]:[${method}]`
    }
    createServer(){
       return http.createServer((req,res) =>{
           this.parseMiddleWares(req,res)
           this.emitter.emit(this.getRouteMask(req.pathname,req.method),req,res);
       })
    }
    listen(port){
        this.createServer().listen(port,() =>console.log(`Listening on port ${port}`));
    }
}