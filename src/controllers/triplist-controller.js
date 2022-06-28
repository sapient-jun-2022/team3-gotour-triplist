
import mongoose from "mongoose";
import { TripListSchema } from "../models/triplist-model";

const TripList = mongoose.model('TripList',TripListSchema);

export const addTripList = (req,res) => {
    let newTrip = new TripList(req.body);

    newTrip.save((err,triplist) => {
        if(err){
            res.send(err);
        }

        res.json(triplist);
    });

}

export const getAllTripList = (req,res) => {
    TripList.find({},(err,triplist) => {
        if(err){
            res.send(err);
        }
        res.json(triplist);
    });
}

export const deleteListByName = (req,res) => {
    console.log(req.params);
    TripList.remove({destinationName:req.params.destName},(err,data) => {
        if(err){
            res.send(res);
        }
        res.json({ message: "Trip deleted successfully."});
    });
}