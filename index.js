const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AuthRoutes = require("./routes/AuthRoute.js");
const UserRoutes = require("./routes/UserRoute.js");
const HotelRoutes = require("./routes/HotelRoute.js");
const RoomRoutes = require("./routes/RoomRoute.js");
const bodyParser = require('body-parser')
const cors = require("cors")
const cookieParser = require('cookie-parser')

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
app.use(cookieParser())

// routers
app.get('/', (req, res) => res.send('okk'))
app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/user', UserRoutes)
app.use('/api/v1/hotel', HotelRoutes)
app.use('/api/v1/room', RoomRoutes)

// error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went wrong!'

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(3001, () => {
    mongoConnect();
    console.log('server running on port 3001');
})