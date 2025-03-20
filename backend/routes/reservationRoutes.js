import express from 'express';
const router  =  express.Router()
import reservation from '../models/reservation.js';
import adminAuth from '../middlewares/adminAuth.js';

// Create a reservation 
const reservationRoutes =  router.post('/reserve', async (req, res) => {
  try {
    const newReservation = new reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: 'Reservation successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all reservations
 router.get('/reservations', async (req, res) => {
  try {
    const reservations = await reservation.find({});
    res.json({success:true,reservations});
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a reservation
router.post('/reservation',adminAuth, async (req, res) => {
  try {
    await reservation.findByIdAndDelete(req.body.id);
    res.json({ message: 'Reservation canceled!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default reservationRoutes;