const express = require("express")
const app = express();
const router = require("../src/route")
const mongoose = require("mongoose")
const cors = require('cors')

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", router);


mongoose.connect("mongodb+srv://manish:manish4@cluster0.fibm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log("Database connected")
}).catch(e => {
    console.log(e)
})

app.listen(process.env.PORT || 4000, () => {
    console.log("app is running on http://localhost:4000")
})