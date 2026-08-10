require("dotenv").config();
const http = require("http");
const { env } = require("./src/config");
const createApp = require("./src/app");
const { logger } = require("./src/logger");

const app = createApp();
const server = http.createServer(app);

server.keepAliveTimeout = env.KEEP_ALIVE_TIMEOUT;
server.headersTimeout = env.HEADERS_TIMEOUT;
server.requestTimeout = env.REQUEST_TIMEOUT;

const PORT = env.PORT || 8800;
server.listen(PORT, () => {
  logger.info({ port: PORT }, "Electrique API listening");
});
