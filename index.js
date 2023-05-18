const express = require("express");
const app = express();
const mongooose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
dotenv.config();

mongooose
.connect(process.env.MONGO_URL)
 .then(() => console.log("Database Connected!!!"))
 .catch((err) => {
    console.log(err);
 });

app.use(express.json());
app.use("/api/users",userRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started!");
})