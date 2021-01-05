const { static } = require('express');
const express = require('express');
const { getDay } = require('./date');

const app = express();
app.use(express.urlencoded({extended: false}));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.static('public'));
let items=["Buy Food","Eat Food"];
let workItems=[];

app.get("/",(req,res)=>{
 let day = getDay();
res.render("list",{listTitle : day,listItem :items});

})

app.post("/",(req,res)=>{
    let item = req.body.newItem;
    if (req.body.list==="Work") {
        workItems.push(item);
        res.redirect("/work")  
    } else {
        items.push(item);
        res.redirect("/")  
    }
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",listItem:workItems});
   })

app.listen(3000, () => {
    console.log(`Server on port 30000 `);
});