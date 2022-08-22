const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AuthRoutes = require("./routes/AuthRoute.js");
const UserRoutes = require("./routes/UserRoute.js");
const HotelRoutes = require("./routes/HotelRoute.js");
const RoomRoutes = require("./routes/RoomRoute.js");
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
app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/user', UserRoutes)
app.use('/api/v1/hotel', HotelRoutes)
app.use('/api/v1/room', RoomRoutes)

app.listen(3001, () => {
    mongoConnect();
    console.log('server running on port 3001');
})