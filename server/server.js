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

async function expiredReservations() {
  const currentDate = new Date();

  try {
    const expiredReservations = await Reservation.find({});

    const expired = expiredReservations
      .filter((reservation) => {
        const reservationDate = parse(
          `${reservation.date} ${reservation.time}`,
          "dd-MM-yyyy HH:mm",
          new Date()
        );
        return isBefore(reservationDate, currentDate);
      })
      .map((reservation) => reservation._id);

    if (expired.length > 0) {
      await Reservation.deleteMany({ _id: { $in: expired } });
    } else {
    }
  } catch (error) {
    console.error("Error removing expired reservations", error);
  }
}

setInterval(expiredReservations, 7200000);

app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

app.post("/reservations", async (req, res) => {
  const newReservation = new Reservation(req.body);

  try {
    await newReservation.save();
    res.send({ message: "New Reservation was added" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

app.delete("/reservations/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Reservation.findByIdAndDelete(id);
    res.send({ message: "Reservation was deleted" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

app.put("/reservations/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.send({ message: "Reservation was updated", updatedReservation });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});
