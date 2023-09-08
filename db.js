const mongoose = require('mongoose');
const dburl = 'mongodb+srv://smartbyteprograms:smart123@cluster0.ifhr7d2.mongodb.net/test?retryWrites=true&w=majority'



module.exports =()=>{
    return mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})
}
