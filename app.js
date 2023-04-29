const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs")
const date=require(__dirname+"/date.js")

const app=express()
var items= ["Buy Food","Cook food","Eat Food"];
var workItems=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/",function(req,res){
   let day=date.getDate();

    res.render("list",{listTitle:day,newListItem:items})

})


app.post("/",function(req,res){
    let item=req.body.myItem;
    console.log(req.body);
   
    if(req.body.button==="Work"){
    workItems.push(item);
    res.redirect("/work");
    }
    else {
    items.push(item);
    res.redirect("/");
    }


})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work list",newListItem:workItems})
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("server started at port 3000")
})