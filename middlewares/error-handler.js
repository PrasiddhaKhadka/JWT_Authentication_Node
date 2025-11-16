const customApiError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')
// const {BadRequestError} = require('../errors')
 
const errorHandler = ()=>{
    return (err,req,res,next)=>{
        if (err instanceof customApiError) {
            return res.status(err.statusCode).json({msg: err.message})
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
    }
}

module.exports = errorHandler