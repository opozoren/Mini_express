export class Router{
    routes;
    constructor(){
        this.routes={};
    }
     #request(method ='GET',path,handler){
        if(!this.routes[path]){
          this.routes[path] = {}
        }
        if(this.routes[path][method]){
            console.log("Error create")
            return
        }
        const endpoint = this.routes[path];
        endpoint[method] = handler;
    }
    get(path,handler){
        this.#request('GET',path,handler);
    }
    post(path,handler){
        this.#request('POST',path,handler);
    }
    delete(path,handler){
        this.#request('DELETE',path,handler);
    }
    put(path,handler){
        this.#request('PUT',path,handler);
    }
}