export default (baseUrl) => (req,res) =>{
    const url = new URL(req.url,baseUrl);
    req.pathname = url.pathname;
    const params = {};
    url.searchParams.forEach((value,key)=>{
        params[key] = value;
    })
    req.params = params;
}
