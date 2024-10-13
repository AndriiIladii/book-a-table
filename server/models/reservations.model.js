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
<<<<<<< HEAD
=======
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  guestCount: {
    type: Number,
  },
  specialRequests: {
>>>>>>> bb14034e0c59f13e0de43cfc08a8a9d5e102b2fe
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
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
