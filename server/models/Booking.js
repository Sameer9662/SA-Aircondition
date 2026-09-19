import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    acType: { type: String, required: true },
    service: { type: String, required: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    address: { type: String, required: true },
    area: { type: String },
    problemDescription: { type: String },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Assigned', 'In Progress', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
