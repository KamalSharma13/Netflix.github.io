const express =require('express');
const app = express();
const cors = require('cors')
const mongoose =require('mongoose')
const userRoutes =require('./Router/userRoute')


app.use(cors())
app.use(express.json())

app.use('/api/user',userRoutes)

app.listen(5000,()=>{
    console.log('server started')
})
mongoose.connect("mongodb://localhost:27017/netflix",{
    
}).then(()=>{
    console.log('database connected')
})