const mongoose=require('mongoose');
const intitdata=require('./data.js');
const Listing=require('../models/listing.js');

const mongo_url="mongodb://127.0.0.1:27017/majorproject";

main().then(()=>{
    console.log("connected Database");
}).catch((err) =>{
    console.log(err);
});


async function main(){
    await mongoose.connect(mongo_url);
}


const initdb= async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(intitdata.data);
    console.log("Data Inserted");
}

initdb();
