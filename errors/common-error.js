const CustomError = require("./custom-error");

class CommonError extends CustomError {
    constructor(message) {
        super(message);
    }
}

module.exports = CommonError