const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5100;

const logEvents = require("./middleware/logger");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`);
  next();
});

app.use("/", require("./controllers/solveMazeController"));

app.listen(PORT, () => {
  logEvents(`Server running on port ${PORT}`);
  console.log(`Server Started`);
});
