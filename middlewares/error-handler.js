const customApiError = require('../errors/custom-error')

const errorHandler = ()=>{
    return (err,req,res,next)=>{
        if (err instanceof customApiError) {
            return res.status(err.statusCode).json({msg: err.message})
        }
        return res.status(500).json({msg: err.message})
    }
}

module.exports = errorHandler