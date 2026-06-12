import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { MOCK_PARKING_SPOTS } from '../constants/mockData';
import { BookingContext } from '../context/BookingContext';

export default function SpotDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectedSpot, searchParams, bookingData, setBookingData } =
    useContext(BookingContext);

  const spot = MOCK_PARKING_SPOTS.find((s) => s.id === parseInt(id));

  if (!spot) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Spot Not Found</h1>
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

  const handleBooking = () => {
    setSelectedSpot(spot);
    const durationHours = parseInt(searchParams.duration) || 1;
    const totalPrice = spot.price * durationHours;

    setBookingData({
      spotId: spot.id,
      date: searchParams.date,
      startTime: searchParams.startTime,
      duration: durationHours,
      paymentMethod: 'credit_card',
      totalPrice,
    });

    navigate(`/book/${spot.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header with Back Arrow */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate('/search')}
            className="text-primary hover:text-accent transition text-2xl"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-primary">Spot Details</h1>
        </div>

        {/* Large Image Placeholder */}
        <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center mb-6 border-2 border-border overflow-hidden">
          <img
            src={spot.photo}
            alt={spot.address}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Address */}
        <h2 className="text-3xl font-bold text-primary mb-2">{spot.address}</h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4">3.2 km away • Driveway</p>

        {/* Price - Green Bold */}
        <p className="text-3xl font-bold text-success mb-2">
          ${spot.price.toFixed(2)}/hour
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="font-semibold text-primary">{spot.rating}</span>
          <span className="text-gray-600">({spot.reviews} reviews)</span>
        </div>

        {/* Info Lines */}
        <div className="space-y-3 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">Access:</span>
            <span className="text-gray-700">Unrestricted entry</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">Available:</span>
            <span className="text-gray-700">24/7</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-8">{spot.description}</p>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
        >
          Book This Spot
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
