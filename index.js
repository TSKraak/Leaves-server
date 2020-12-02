const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const plantsRouter = require("./routers/plants");
const commentsRouter = require("./routers/comments");
const Plant = require("./models/").plant;
const User = require("./models/").user;
const { mailReminder } = require("./nodemailer");

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

// if (process.env.DELAY) {
//   app.use((req, res, next) => {
//     setTimeout(() => next(), parseInt(process.env.DELAY));
//   });
// }

app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/plants", plantsRouter);
app.use("/comments", commentsRouter);

// Listen for connections on specified port (default is port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

setInterval(async function waterAlertChecker() {
  const plants = await Plant.findAll();

  const curr = new Date();
  curr.setDate(curr.getDate());
  const newDate = curr.toISOString().substr(0, 10);

  const stringDate = new Date(`${newDate}`);

  plants.forEach(async (plant) => {
    const waterAlert = new Date(`${plant.waterAlert}T10:00:00Z`);

    if (+stringDate >= +waterAlert) {
      const plantToUpdate = await Plant.findByPk(plant.id, {
        include: [{ model: User }],
      });

      waterAlert.setDate(waterAlert.getDate() + plant.waterPeriodDays);
      const newAlertDate = waterAlert.toISOString().substr(0, 10);

      const updatedPlant = await plantToUpdate.update({
        waterAlert: newAlertDate,
      });

      mailReminder({
        email: plantToUpdate.user.email,
        careType: "water",
        plantName: plant.name,
        nextReminder: updatedPlant.waterAlert,
      });
    }
  });
}, 1200000); // runs every 20 mins so Heroku server won't go to sleep

setInterval(async function fertiliseAlertChecker() {
  const plants = await Plant.findAll();

  const curr = new Date();
  curr.setDate(curr.getDate());
  const newDate = curr.toISOString().substr(0, 10);

  const stringDate = new Date(`${newDate}`);

  plants.forEach(async (plant) => {
    const fertiliseAlert = new Date(`${plant.fertiliseAlert}T10:00:00Z`);

    if (+stringDate >= +fertiliseAlert) {
      const plantToUpdate = await Plant.findByPk(plant.id, {
        include: [{ model: User }],
      });

      fertiliseAlert.setDate(
        fertiliseAlert.getDate() + plant.fertilisePeriodDays
      );
      const newAlertDate = fertiliseAlert.toISOString().substr(0, 10);

      const updatedPlant = await plantToUpdate.update({
        fertiliseAlert: newAlertDate,
      });

      mailReminder({
        email: plantToUpdate.user.email,
        careType: "fertilise",
        plantName: plant.name,
        nextReminder: updatedPlant.fertiliseAlert,
      });
    }
  });
}, 1200000); // runs every 20 mins so Heroku server won't go to sleep
