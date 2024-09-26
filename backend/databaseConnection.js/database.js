const mongoose = require('mongoose');



const database=mongoose.connect('mongodb+srv://devbandil120:xiQ7yc4DI400IHh7@shopdb.3zlcr.mongodb.net/?retryWrites=true&w=majority&appName=shopdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
 




module.exports =database

