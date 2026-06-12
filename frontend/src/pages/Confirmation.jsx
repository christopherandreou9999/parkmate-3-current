import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../context/BookingContext';
import { MOCK_PARKING_SPOTS } from '../constants/mockData';

export default function Confirmation() {
  const navigate = useNavigate();
  const { bookingData, selectedSpot } = useContext(BookingContext);

  const spot = selectedSpot || MOCK_PARKING_SPOTS.find((s) => s.id === bookingData.spotId);
  const referenceNumber = `PM${Date.now().toString().slice(-8)}`;
  const accessCode = 'A7K2M9';

  if (!bookingData.spotId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">No Booking Found</h1>
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

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-success p-8 text-center flex flex-col items-center">
          {/* Green Circle with Checkmark */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
            <span className="text-5xl text-success">✓</span>
          </div>

          {/* Confirmation Text - Green */}
          <h1 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
          <p className="text-white text-opacity-90">Your spot is reserved</p>
        </div>

        <div className="p-8">
          {/* Booking Details Card */}
          <div className="bg-background rounded-lg p-5 mb-6 space-y-3">
            <div>
              <p className="text-xs text-gray-600 uppercase font-semibold">
                Location
              </p>
              <p className="font-bold text-primary text-sm">{spot?.address}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600 uppercase font-semibold">
                  Date
                </p>
                <p className="font-bold text-primary text-sm">
                  {bookingData.date}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-semibold">
                  Time
                </p>
                <p className="font-bold text-primary text-sm">
                  {bookingData.startTime}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 uppercase font-semibold">
                Access Code
              </p>
              <p className="font-bold text-primary text-lg font-mono">
                {accessCode}
              </p>
            </div>

            <div className="pt-3 border-t border-border">
              <p className="text-xs text-gray-600 uppercase font-semibold">
                Reference
              </p>
              <p className="font-bold text-primary text-sm font-mono">
                {referenceNumber}
              </p>
            </div>
          </div>

          {/* Navigate Button - Navy */}
          <button
            onClick={() => navigate('/search')}
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition mb-4"
          >
            Navigate to this spot
          </button>

          {/* View Bookings Link */}
          <div className="text-center">
            <button
              onClick={() => navigate('/search')}
              className="text-accent font-semibold hover:underline text-sm"
            >
              View My Bookings
            </button>
          </div>

          {/* Email Confirmation */}
          <p className="text-xs text-gray-600 text-center mt-6">
            ✉️ Confirmation email sent to your inbox
          </p>
        </div>
      </div>
    </div>
  );
}
