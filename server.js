const express = require("express");
const app = express();


const authRouter = require("./routes/authRoutes")
const orderRouter = require("./routes/orderRoutes")
const profileRouter = require("./routes/profileRoutes")

app.use("/auth", authRouter)
app.use("/order", orderRouter)
app.use("/profile", profileRouter)

app.use(process.env.PORT, ()=>{
    console.log("Server started on port" + process.env.PORT)
})