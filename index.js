const express = require("express");
const app = express();
const mongooose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/Order");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/Product");

dotenv.config();

mongooose
.connect(process.env.MONGO_URL)
 .then(() => console.log("Database Connected!!!"))
 .catch((err) => {
    console.log(err);
 });

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/orders",orderRoute);
app.use("/api/carts",cartRoute);
app.use("/api/products",productRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started!");
})