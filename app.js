const http=require("http");
const express=require("express");
const url=require("url");
const fs=require("fs");
const mysql=require("mysql");
const server=http.createServer((req,res)=>{
const pathname=req.url;
var connection = mysql.createConnection({
    host     : 'mydb.cpswtslpyzgk.us-east-2.rds.amazonaws.com',
    database : 'library',
    user     : 'root',
    password : 'rootroot',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});
if(pathname==="/overview"|| pathname==="/")
{
    res.end("yes this is overview");
}
else if(pathname==="/api"){
    fs.readFile("./data.json","utf-8",(err,data)=>{
        const productdata=JSON.parse(data);
        console.log(productdata);
    })


}
else{
    res.writeHead(404,{
    'Content-type':'text/html',
    });
    res.end("<h1>not found</h1>");
}
console.log(req.url);
});

server.listen(7000,'127.0.0.1',()=>{
    console.log("listening at 8000");
})