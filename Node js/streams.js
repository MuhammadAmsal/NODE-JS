const fs=require('fs')
const server=require('http').createServer();
const port =8000
server.on("request",(req,res)=>{

fs.readFile("./input.txt",(err,data)=>{

    if (err) console.log(err)
    res.end(data)
})



})
server.listen(port, '127.0.0.1',()=>{
     console.log(`server is working`)
 })