// this is Node js method for create an api

// const http=require('http')
// const url=require('url')
// const port =8000;

// const server=http.createServer((req,res)=>{
// console.log(req.url,"=> request url")
// if(req.url === "/dashboard"){
//     res.end('this is my dashboard')
// } else if(req.url === "/homepage"){
//     res.end(' this is my home page')
// } else if (req.url === "/login"){
//   res.end(`this is my login page`)

// }else{
//     res.writeHead(404)
//     res.end('this page is not available, 404 error')
// }
// })

// server.listen(port, '127.0.0.1',()=>{
//     console.log(`server is working`)
// })
  

//this is EXPRESS METHOD FOR create an api

// import express from 'express'
// const express=require('express')
// const app = express();

// const port = 8000;

// app.get('/', (req, res)=> {
//     res.status(200).send("Welcome to the home page")
// })

// app.get('/about', (req, res)=> {
//     res.status(200).send("Welcome to the about page")
// })
// app.get('/contact', (req, res)=> {
//     res.status(200).send("Welcome to the contact page")
// })
// app.get('/dahiBaray', (req, res)=> {
//     res.status(200).send("yeh lo dahiBaray")
// })
// app.get('/bhelPuri', (req, res)=> {
//     res.status(200).json({
//         plate: 1,
//         name: "bhelPuri",
//         price: 500
//     })
// })
// app.post('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani post bhel puri ki request ban gai")
// })
// app.delete('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani bhelPuri delete kardi")
// })
// app.put('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani bhelPuri main masala daal diya hai")
// })

// app.listen(port, ()=> {
//    console.log(`Sun raha hun server ko port number ${port} per`) 
// })

const fs=require('fs')
const server=require('http').createServer();

server.on("request",(req,res)=>{

fs.readFile("./input.txt",(err,data)=>{

    if (err) console.log(err)
    res.end(data)
})



})
server.listen(port, '127.0.0.1',()=>{
     console.log(`server is working`)
 })