const AppErrors = require("../errors/AppErrors")

const isProduction = process.env.NODE_ENV === "production"


function normalize(err) {
    if (err instanceof AppErrors) return err

    if (err.type === "entity.parse.failed" || (err instanceof SyntaxError && "body" in err)) {
        return new AppErrors("Malformed JSON in request body", 400, "INVALID_JSON")
    } 

    if (err.name === "MulterError") {
        const message = {
            LIMIT_FILE_SIZE: "File size exceeds the limit",
            LIMIT_FILE_COUNT: "File count exceeds the limit",
            LIMIT_UNEXPECTED_FILE: "Unexpected file field",
        }
        return new AppErrors(message[err.code] || "File is too large", 400, "BAD_REQUEST")
    }

    const fallback = new AppErrors(
        isProduction ? "Something went wrong on our end" : err.message,
        err.statusCode || 500, "INTERNAL_ERROR",
    );

    fallback.isProduction = false;
    fallback.stack = err.stack;
    return fallback;
}

function errorHandler(err, req, res, next) {
    const normalized = normalize(err);
    const { statusCode, message, code, details, isOperational } = normalized;

    if (!isOperational || statusCode >= 500) {
        console.error(`[${req.id || "no-request-id"}]`, err)
    } else if (!isProduction) {
        console.warn(`[${req.id || "no-request-id"}] ${statusCode}, ${code}, ${message}`)
    }

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            code,
            details,
            requestId: req.id || null,
            ...(!isProduction && !isOperational && { stack: err.stack }),
        }
    })
}
module.exports = errorHandler