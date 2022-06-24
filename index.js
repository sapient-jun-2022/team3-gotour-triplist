import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/triplist-routes";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trip_db',{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type:'application/json'}));

// app.get("/",(req,res)=>{
//     res.send("Hello ");
// });

routes(app);

app.listen(port);