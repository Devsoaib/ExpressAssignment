const express = require("express");
const app = express();
app.use(express.urlencoded({extended: "true"}))
const PORT = 8000;
const userRouter = require('./routes/users.route')
app.use(userRouter)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
app.use((req, res) => {
    res.status(404).json(`404! Bad Request`)
})



app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});