const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("./firebaseAdmin");

const app = express();
app.use(cors({ origin: true }));

//importacao_rotas
const usersRoute = require("./src/routes/users");
const propertiesRoute = require("./src/routes/properties");
const lotsRoute = require("./src/routes/lots");
const animalsRoute = require("./src/routes/animals");
const eventsRoute = require("./src/routes/events");
const feedRoute = require("./src/routes/feed");
const paymentsRoute = require("./src/routes/payments");
const reportsRoute = require("./src/routes/reports");
const vaccinesRoute = require("./src/routes/vaccines");
const reproductionsRoute = require("./src/routes/reproductions");
const changePhaseRoute = require("./src/routes/changePhase");

//rotas
app.use("/api/users", usersRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/lots", lotsRoute);
app.use("/api/animals", animalsRoute);
app.use("/api/events", eventsRoute);
app.use("/api/feed", feedRoute);
app.use("/api/payments", paymentsRoute);
app.use("/api/reports", reportsRoute);
app.use("/api/vaccines", vaccinesRoute);
app.use("/api/reproductions", reproductionsRoute);
app.use("/api/changePhase", changePhaseRoute);

exports.api = functions.https.onRequest(app);
