import express from "express";
import cors from "cors";
import fs from "fs";
import { isBefore, parseISO } from "date-fns";

const filePath = "./reservations.json";

const usersPath = "./users.json";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

let dataObj = [];
let usersObj = [];
const PASSWORD = "123";

function saveData(filePath, dataObj) {
  fs.writeFileSync(filePath, JSON.stringify(dataObj), {
    encoding: "utf-8",
  });
}

function saveUsers(usersPath, usersObj) {
  fs.writeFileSync(usersPath, JSON.stringify(usersObj), {
    encoding: "utf-8",
  });
}

const data = fs.readFileSync(filePath, { encoding: "utf-8" });
const users = fs.readFileSync(usersPath, { encoding: "utf-8" });
usersObj = JSON.parse(users);
dataObj = JSON.parse(data);

app.post("/users", (req, res) => {
  const newUser = req.body;
  const { password } = req.body;

  if (password === PASSWORD) {
    usersObj.push(newUser);
    saveUsers(usersPath, usersObj);
    res.send({
      message: "New User was added",
    });
  } else {
    res.send({
      message: "Wrong Password",
    });
  }
});

function expiredReservations() {
  const currentDate = new Date();

  dataObj = dataObj.filter((reservation) => {
    const reservationDate = parseISO(`${reservation.date}T${reservation.time}`);
    return !isBefore(reservationDate, currentDate);
  });

  saveData(filePath, dataObj);
}

setInterval(expiredReservations, 300000);

app.get("/reservations", (req, res) => {
  res.json(dataObj);
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
