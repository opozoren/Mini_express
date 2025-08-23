import * as http from "node:http";
import EventEmitter from "events";
export class App{
    constructor(){
         this.emitter = new EventEmitter();
    }
    addRouter(router){
        console.log(router)
        for(let route in router.routes){
            const endpoint = router.routes[route];
            for(let methods in endpoint){
                const mask = this.getRouteMask(route, methods);
                this.emitter.on(mask,endpoint[methods]);
            }
        }
    }
    getRouteMask(path,method){
        return `[${[path]}]:[${method}]`
    }
    createServer(){
       return http.createServer((req,res) =>{
           const url = this.getRouteMask(req.url,req.method)
           console.log(url)
            this.emitter.emit(this.getRouteMask(req.url,req.method),req,res);
       })
    }
    listen(port){
        this.createServer().listen(port,() =>console.log(`Listening on port ${port}`));
    }

}