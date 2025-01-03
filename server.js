const express = require("express");
/*const cors = require('cors');*/

const DB = require("nedb-promises");

const server = express();
const ContactDB = DB.create(__dirname + "/contact.db");

// 靜態檔案
server.use(express.static(__dirname));
const ProfolioDB = DB.create(__dirname+"/porfolio.db");
const paintingDB = DB.create(__dirname+"/painting.db");
const photographyDB = DB.create(__dirname+"/photography.db");
// 中介軟體解析 body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/*ProfolioDB.insert([
  {modal:"card1",title:"Painting",text:"This is a description for my first card.",imgSrc:"picture/basketballbook.png",link:"Painting.html","_id":"7ZJYJH2RLk8Nbtaa"},
{modal:"card2",title:"Photography",text:"This is a description for my second card.",imgSrc:"picture/IMG_9262 (1).jpg",link:"Photography.html","_id":"VBOa1pcJd4no9qyP"},
{modal:"card4",title:"Animation",text:"This is a description for my fourth card.",imgSrc:"picture/littlechick01.jpg",link:"Animation.html","_id":"f3yMEMCXFqa2v2yG"}
])*/

/*const paintingData = [
  
    {imgSrc: 'assets/img/phones/redrice note 9 pro', text: '紅米note 9 pro', title: '' },
    {imgSrc: 'assets/img/phones/Poco c65', text: 'Poco c65', title: '' },
    {imgSrc: 'assets/img/phones/rice 14 pro', text: '小米14 pro', title: '' },
    {imgSrc: 'assets/img/phones/zenfone 5z', text: '華碩zenfone 5z', title: '' },
    {imgSrc: 'assets/img/phones/redrice note 7', text: '紅米note 7', title: '' },
    {imgSrc: 'assets/img/phones/redrice note 10s', text: '紅米note 10s', title: '' },
    {imgSrc: 'assets/img/phones/rice 10t lite', text: '小米10t lite', title: '' },
    {imgSrc: 'assets/img/phones/Oppo reno 2z', text: 'Oppo reno 2z', title: '' },
    {imgSrc: 'assets/img/phones/Google pixel 9 pro xl', text: 'Google pixel 9 pro xl', title: '' },
    
  
 
  
];

// 直接插入資料
ProfolioDB.insert(paintingData)
  .then(() => console.log("Initial painting data inserted"))
  .catch(err => console.error("Error inserting initial data:", err));*/
   
      
        server.get("/profolio", (req,res)=>{
          //DB
          ProfolioDB.find({}).then(results=>{
            if(results != null){
                 res.send(results);
            }else{
                res.send("Error!");
            }
          })
    })
  /*  server.get("/painting", (req,res)=>{
      //DB
      paintingDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})
server.get("/photography", (req,res)=>{
  //DB
  photographyDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})*/
// 路由
/*server.post("/contact_me",  (req, res) => {
 
        ContactDB.insert(req.body);
        res.redirect("/aftercontactme.html");
   
});*/


// 啟動伺服器
server.listen(5678,  () => {
    console.log("Server is running at port 5678.");
});