import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: String,
  },
  tel: {
    type: String,
  },
  guests: {
    type: Number,
  },
  comment: {
    type: String,
  },
  holiday: {
    type: Boolean,
  },
  status: {
    type: String,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
