require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/app_routes')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')


//DATABASE 
const connectDB = require('./db/db_connection')


const PORT= process.env.PORT || 8000


app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



//ROUTES
app.use('/api/v1',routes)


//MIDDLEWARES
app.use(notFound())
app.use(errorHandler())

// STARTING A SERVER

const startServer = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
                console.log(`Server is running on ${PORT}`)
            })
        
    } catch (error) {
        console.log(error)
    }
}

startServer()