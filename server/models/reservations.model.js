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
  phoneNumber: {
    type: String,
  },
  guestCount: {
    type: Number,
  },
  specialRequests: {
    type: String,
  },
  birthday: {
    type: Boolean,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
