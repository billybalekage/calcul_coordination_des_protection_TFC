class AppErrors extends Error {
    constructor(
        message,
        statuCode = 500,
        code = "INTERNAL_ERROR",
        details = null,
    ) {
        super(message);
        this.statusCode = statuCode;
        this.code = code;
        this.details = details;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor); 
    }
}


class NotFoundError extends AppErrors {
    constructor(message = "Resource not found", details = null) {
        super(message, 404, "NOT_FOUND", details);
    }
}

module.exports = { AppErrors, NotFoundError };