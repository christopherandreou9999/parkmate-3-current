import { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    date: '',
    startTime: '',
    duration: '',
  });

  const [selectedSpot, setSelectedSpot] = useState(null);
  const [bookingData, setBookingData] = useState({
    spotId: null,
    date: '',
    startTime: '',
    duration: 0,
    paymentMethod: 'credit_card',
    totalPrice: 0,
  });

  return (
    <BookingContext.Provider
      value={{
        searchParams,
        setSearchParams,
        selectedSpot,
        setSelectedSpot,
        bookingData,
        setBookingData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
