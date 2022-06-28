import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TripListSchema = new Schema(
    {
        destinationName : {
            type : String
        },
        placesToVisit : {
            type : Array
        },
        price : {
            type : Number
        },
        daysOfTravel : {
            type : Number
        }
    }
);

