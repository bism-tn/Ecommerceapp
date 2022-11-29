const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
const UserRoutes = require('./src/route/user.route');
var db = require('./src/config/dbconfig.js')
db.MongoConnect();
const port = process.env.PORT || 5000
app.use(UserRoutes);
app.set('view engine','ejs')
app.set('views','./src/views');
app.listen(port,() => {
console.log('server running at',port);
})