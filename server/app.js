const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin.routes");
const videoRoute = require("./routes/video.routes");
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(["*", "http://localhost:4200"]));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/admin", adminRoute);
app.use("/video", videoRoute);

module.exports = app;
