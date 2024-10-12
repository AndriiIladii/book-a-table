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
  table_number: {
    type: Number,
  },
  phone_number: {
    type: Number,
  },
  guest_count: {
    type: Number,
  },
  special_requests: {
    type: String,
  },
  birthday: {
    type: Boolean,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
