// src/components/Booking/BookingList.js
import React, { useEffect, useState } from 'react';
import { getAllClassBookings } from '../../api/bookingApi';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllClassBookings();
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Class Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.className} - {booking.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
