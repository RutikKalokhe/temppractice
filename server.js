var express =require("express");
var app=express();

app.get("/",(req,resp)=>{
    resp.send(
        "<h2>223085</h2>"+
        "<h3>IACSD March 2022</h3>"+
        "<h4>Akurdi Pune</h4>"
    );
});

app.get("/about",(req,resp)=>{
    resp.send(
        "<h2>Rutik Kalokhe</h2>"+
        "<h3>IACSD March 2022</h3>"+
        "<h4>Pune Maharashtra</h4>"
    );
});


var server=app.listen(7000);
console.log("NodeJs application is listening at 7000 port ")