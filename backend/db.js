const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foody:yashking12@cluster0.ruib79x.mongodb.net/foody?retryWrites=true&w=majority';
const mongoDb = async () => {
    // await mongoose.connect(mongoURI)
    //     .then(() => {
    //         console.log('Connected to MongoDB');
    //         const fetched_data =mongoose.connection.db.collection("food_item");
    //         fetched_data.find({}).toArray(function (err,data){
    //             if(err) console.log(err);
    //             else console.log(data);
    //         });
    //     })
    //     .catch((error) => {
    //         console.error('Error connecting to MongoDB:', error);
    //     });
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
    const fetched_data = mongoose.connection.db.collection("food_item");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.food_item=data; 
    global.foodCategory=catData; 
    // console.log(global.food_item);
}

module.exports = mongoDb;
