const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("./firebaseAdmin");

const app = express();
app.use(cors({ origin: true }));

// Importe suas rotas aqui
const usersRoute = require("./src/routes/users");
const propertiesRoute = require("./src/routes/properties");
const lotsRoute = require("./src/routes/lots");
const animalsRoute = require("./src/routes/animals");
const eventsRoute = require("./src/routes/events");
const feedRoute = require("./src/routes/feed");
const paymentsRoute = require("./src/routes/payments");

// Adicione todas as rotas
app.use("/api/users", usersRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/lots", lotsRoute);
app.use("/api/animals", animalsRoute);
app.use("/api/events", eventsRoute);
app.use("/api/feed", feedRoute);
app.use("/api/payments", paymentsRoute);

exports.api = functions.https.onRequest(app);
