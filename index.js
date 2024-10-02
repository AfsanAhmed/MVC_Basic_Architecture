const express = require("express");
const userRoute = require("./router/user_route");
const productRoute = require("./router/product_route");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(userRoute);
app.use(productRoute);

app.get("/",(req,res) => {
    res.send("hello people");

})
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
    
})
