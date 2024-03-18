const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());


app.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'> Add Product </button> </form>");
  });
  
  
app.post('/product', (req,res)=>{
    console.log(req.body);  
    res.redirect('/');
})

app.use('/', (req, res, next) => {
  res.send("<h1> welcome our app </h1>");
});

app.listen(3000);
