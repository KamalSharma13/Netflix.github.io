const mongoose =require('mongoose')

const schema = mongoose.Schema();


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required : true,
        unique  :true,
        max : 50
    },
    likedMovies: Array
})

module.exports =mongoose.model('user',userSchema)