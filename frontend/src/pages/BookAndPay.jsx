import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { BookingContext } from '../context/BookingContext';
import { MOCK_PARKING_SPOTS } from '../constants/mockData';

export default function BookAndPay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookingData, setBookingData } = useContext(BookingContext);
  const [selectedPayment, setSelectedPayment] = useState('credit_card');

  const spot = MOCK_PARKING_SPOTS.find((s) => s.id === parseInt(id));

  if (!bookingData.spotId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            No Booking Details
          </h1>
          <button
            onClick={() => navigate('/search')}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    setBookingData({ ...bookingData, paymentMethod: selectedPayment });
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header with Back Arrow */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-primary hover:text-accent transition text-2xl"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-primary">Review Booking</h1>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-background border-2 border-border rounded-lg p-6 mb-6">
          <h2 className="font-bold text-primary mb-4">Booking Details</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-600">Address:</span>{' '}
              <span className="font-semibold text-primary">{spot?.address}</span>
            </p>
            <p>
              <span className="text-gray-600">Date:</span>{' '}
              <span className="font-semibold text-primary">
                {bookingData.date}
              </span>
            </p>
            <p>
              <span className="text-gray-600">Time:</span>{' '}
              <span className="font-semibold text-primary">
                {bookingData.startTime}
              </span>
            </p>
            <p>
              <span className="text-gray-600">Duration:</span>{' '}
              <span className="font-semibold text-primary">
                {bookingData.duration} hours
              </span>
            </p>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="font-bold text-primary mb-4">Price Summary</h2>
          <div className="space-y-3 mb-4 pb-4 border-b border-border">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Parking Fee:</span>
              <span className="font-semibold text-primary">
                ${bookingData.totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Service Fee:</span>
              <span className="font-semibold text-primary">$0.00</span>
            </div>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-bold text-primary">Total:</span>
            <span className="font-bold text-success text-2xl">
              ${bookingData.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="font-bold text-primary mb-4">Payment Method</h2>
          <div className="flex items-center justify-between p-4 border-2 border-border rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <p className="font-semibold text-primary">Visa</p>
                <p className="text-sm text-gray-600">•••• •••• •••• 4242</p>
              </div>
            </div>
            <button className="text-accent font-semibold hover:underline text-sm">
              Change
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-success text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition text-lg mb-3"
        >
          Confirm & Pay ${bookingData.totalPrice.toFixed(2)}
        </button>

        {/* Stripe Security Text */}
        <p className="text-center text-xs text-gray-600">
          🔒 Secured by Stripe
        </p>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
