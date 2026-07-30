require("dotenv").config()
const createApp = require("./src/app")
const http = require("http")

const PORT = process.env.PORT || 7000;

const app = createApp()
const httpServer = http.createServer(app)

httpServer.listen(PORT, () => {
    console.log(`Electrique api is listening on port ${PORT}`)
})