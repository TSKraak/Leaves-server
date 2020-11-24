const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

/**
 * delay middleware
 * Since the api and client run on the same machine in development mode
 * the request come in within milliseconds
 * To simulate normal network traffic this simple middleware delays
 * the incoming requests by 1500 second
 * This allows you to practice with showing loading spinners in the client
 *
 * - it's only used when you use npm run dev to start your app
 * - the delay time can be configured in the package.json
 */

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/user", userRouter);

// Listen for connections on specified port (default is port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
