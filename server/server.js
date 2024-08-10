import express from "express";
import cors from "cors";
import fs from "fs";

const filePath = "./reservations.json";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

let dataObj = [];

const data = fs.readFileSync(filePath, { encoding: "utf-8" });
dataObj = JSON.parse(data);

app.get("/reservations", (req, res) => {
  res.json(dataObj);
});

app.post("/reservations", (req, res) => {
  const newReservation = req.body;

  dataObj.push(newReservation);

  fs.writeFileSync(filePath, JSON.stringify(dataObj), {
    encoding: "utf-8",
  });

  res.send({
    message: "New Reservation was added",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
