export default (req,res)=>{
    res.send = (data) =>{
        res.end(data);
    }
}