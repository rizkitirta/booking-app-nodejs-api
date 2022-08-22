const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoute.js");
const userRoutes = require("./routes/userRoute.js");
const hotelRoutes = require("./routes/hotelRoute.js");
const roomRoutes = require("./routes/roomRoute.js");
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express()
dotenv.config()

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected To MongoDB')
    } catch (error) {
        console.log(error)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected!');
})
mongoose.connection.on('connected', () => {
    console.log('mongodb connected!')
})

// setup
app.use(bodyParser.json())
app.use(cors())

// routers
app.get('/', (req, res) => res.send('okk'))
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/hotel', hotelRoutes)
app.use('/api/v1/room', roomRoutes)

app.listen(3001, () => {
    mongoConnect();
    console.log('server running on port 3001');
})