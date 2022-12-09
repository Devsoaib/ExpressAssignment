const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');


//query

router.post("/query", (req, res)=>{
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Your name is ${name} and age is ${age}`)
});


//header

router.post("/header", (req, res)=>{
    const firstName = req.header("firstName")
    const lastName = req.header("lastName")
      res.send(`Your name is ${firstName} ${lastName}`)
  });

  //json req handlers

router.post("/body", (req, res)=>{
  const name = req.body.name;
    const userID = req.body.userID;
    res.send(`your name is ${name} and userID is ${userID}`);

    // const jsonData = req.body;
    // const jsonString =  JSON.stringify(jsonData)
    // res.send(jsonString);
 })
 

  //download

router.post("/download", (req, res)=>{
    res.download("./img/fiverr profile.png")
});

//upload file

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname;
      cb(null, name)
    }
  });
  const upload = multer({ storage: storage })

router.get("/register", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/../views/register.html"))
})

router.post("/register", upload.single("image"), (req, res, next) => {
    res.status(200).send("file is uploaded successfully")
})
  






module.exports = router;