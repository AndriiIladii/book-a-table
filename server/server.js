import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import { isBefore, parse } from "date-fns";
import User from "./models/users.model.js";
import Reservation from "./models/reservations.model.js";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.j6vlx.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to db");

    migrateUsers();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });

async function migrateUsers() {
  try {
    const data = fs.readFileSync("users.json", { encoding: "utf-8" });
    const users = JSON.parse(data);

    await User.insertMany(users);
    console.log("migrated successfully");
  } catch (error) {
    console.error("Error ", error);
  }
}

app.post("/users", async (req, res) => {
  const { password } = req.body;

  try {
    const user = await User.findOne({ password });

    if (user) {
      res.send({
        name: user.name,
        message: `Welcome ${user.name}`,
      });
    } else {
      res.send({
        message: "Wrong Password",
      });
    }
  } catch (error) {
    console.error("Error during authentication", error);
    res.status(500).send({ message: "Server error" });
  }
});

function expiredReservations() {
  const currentDate = new Date();

  dataObj = dataObj.filter((reservation) => {
    const reservationDate = parse(
      `${reservation.date} ${reservation.time}`,
      "dd-MM-yyyy HH:mm",
      new Date()
    );

    return !isBefore(reservationDate, currentDate);
  });

  saveData(filePath, dataObj);
}

setInterval(expiredReservations, 7200000);

app.get("/reservations", (req, res) => {
  const sortedArray = dataObj.sort((a, b) => {
    const dateTimeA = parse(
      `${a.date} ${a.time}`,
      "dd-MM-yyyy HH:mm",
      new Date()
    );
    const dateTimeB = parse(
      `${b.date} ${b.time}`,
      "dd-MM-yyyy HH:mm",
      new Date()
    );
    return dateTimeA - dateTimeB;
  });

  res.json(sortedArray);
});

app.post("/reservations", (req, res) => {
  const newReservation = req.body;

  dataObj.push(newReservation);

  saveData(filePath, dataObj);

  res.send({
    message: "New Reservation was added",
  });
});

app.delete("/reservations/:id", (req, res) => {
  const reservationId = +req.params.id;

  const filteredReservation = dataObj.filter(
    (reservation) => reservation.id !== reservationId
  );

  dataObj = filteredReservation;
  saveData(filePath, dataObj);
  res.send({
    message: "Reservation was deleted",
  });
});

app.put("/reservations/:id", (req, res) => {
  const reservationId = +req.params.id;
  const updatedReservation = req.body;

  const reservation = dataObj.find(
    (reservation) => reservation.id === reservationId
  );

  Object.assign(reservation, updatedReservation);

  saveData(filePath, dataObj);

  res.send({
    message: "Reservation was updated",
  });
});
