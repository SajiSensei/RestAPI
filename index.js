const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017/admin";
const port = "3000";

mongoose.connect(url, {})
.then(result => console.log('Database connected'))
.catch(err => console.log(err));

const MasakitonRoute = require('./Route/Masakiton.route');
app.use('/masakiton', MasakitonRoute);

//Mali ang endpoint
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//Express Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});


app.listen(port, () =>{
    console.log("Listening on port 3000..."); 
});