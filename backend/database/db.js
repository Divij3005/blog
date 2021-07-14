import mongoose from 'mongoose';


const Connection = async() => {
    try{
        const URL = 'mongodb://user:HappyBlogging@bolgapp-shard-00-00.ersq3.mongodb.net:27017,bolgapp-shard-00-01.ersq3.mongodb.net:27017,bolgapp-shard-00-02.ersq3.mongodb.net:27017/Project0?ssl=true&replicaSet=atlas-y6mnfv-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false});
        console.log('DB connected successfully !!');
    }
    catch(err){
        console.log('Error while connecting to Mongodb'+err);
    }
}


export default Connection;