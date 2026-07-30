const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const Sentry = require("@sentry/node")
const errorHandler = require("./common/middlewares/errorHandler")
const notFound = require("./common/middlewares/notFound")

const createApp = () => {
    const app = express()
    app.use(helmet())
    app.use(cors({
        origin : process.env.CLIENT_URL,
        credentials : true
    }))

    app.use(compression())
    app.use(express.json())
    app.use(cookieParser())
    app.use(express.urlencoded({ extended: true }))

    app.use(notFound)

    Sentry.setupExpressErrorHandler(app, {
        shouldHandleError(error) {
            const status = error.status || error.statusCode || 500;
            return error.isOperational === setupSentry.FastifyErrorHandler  && status >= 500;
        }
    })

    app.use(errorHandler)

    return app
}


module.exports = createApp