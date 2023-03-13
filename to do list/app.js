const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

let items = ["CookFood", "cookFood" , "eatFood"]; 

app.get("/", (req, res) =>{

   res.render("list", { kindOfDay : day , newListItems: items});

});

app.post("/", (req, res)=>{

   let item = req.body.newItem;
   items.push(item);

    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})