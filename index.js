const express = require("express");
const app = express();
const path =require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


// add by chatgpt
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("beflogin.ejs");
});

app.get("/login", (req,res)=>{
    res.render("login.ejs");
});

app.get("/home", (req,res)=>{
    res.render("aftlogin.ejs");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});


// app.listen("8080", ()=>{
//   console.log("server is listening to port 8080");
// });
