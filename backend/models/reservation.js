import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  tableNumber: { type: Number, required: true },
});

const reservation = mongoose.model('Reservation', reservationSchema);

export default reservation;