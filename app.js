const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*',cors());


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorhandler);



const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
// api/v1/products

const api = process.env.API_URL;

//routes
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`,categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


mongoose.connect(process.env.CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // dbName: 'eshop-database'
})
.then(()=>{
    console.log("database is ready");
})
.catch((err)=>{
    console.log('err');
});

app.listen(3000,()=>{
    console.log("server is running under localhost 3000");
})