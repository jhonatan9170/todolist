const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/",(req,res)=>{
 var today = new Date();
 var currentDay = today.getDay();
 if (currentDay===6||currentDay===0) {
     
 } else {
     
 }
res.send("today is "+ today.getUTCMinutes());


})


app.listen(3000, () => {
    console.log(`Server on port 30000 `);
});