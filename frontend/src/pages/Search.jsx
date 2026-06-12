import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { BookingContext } from '../context/BookingContext';
import { MOCK_PARKING_SPOTS } from '../constants/mockData';

export default function Search() {
  const { searchParams, setSearchParams } = useContext(BookingContext);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Location Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-primary rounded-lg">
            <span className="text-xl">📍</span>
            <input
              type="text"
              name="destination"
              value={searchParams.destination}
              onChange={handleInputChange}
              placeholder="Where are you heading?"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-6 bg-gradient-to-br from-accent to-accent bg-opacity-20 rounded-lg h-48 flex items-center justify-center border-2 border-accent border-opacity-30 relative overflow-hidden">
          <div className="text-center">
            <p className="text-accent font-semibold">[Map View]</p>
          </div>
          {/* Dot markers */}
          <div className="absolute top-8 left-8 w-3 h-3 bg-accent rounded-full"></div>
          <div className="absolute top-20 right-12 w-3 h-3 bg-accent rounded-full"></div>
          <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-accent rounded-full"></div>
          <div className="absolute bottom-8 right-20 w-3 h-3 bg-accent rounded-full"></div>
        </div>

        {/* Search Filters */}
        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={searchParams.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                value={searchParams.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Duration (hours)
              </label>
              <input
                type="number"
                name="duration"
                value={searchParams.duration}
                onChange={handleInputChange}
                placeholder="2"
                min="1"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
          </div>

          {/* Find Parking Button */}
          <button
            onClick={handleSearch}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Find Parking
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Available Spots ({MOCK_PARKING_SPOTS.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_PARKING_SPOTS.map((spot) => (
                <Link key={spot.id} to={`/spot/${spot.id}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer h-full">
                    <img
                      src={spot.photo}
                      alt={spot.address}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-primary text-lg">
                          ${spot.price}
                          <span className="text-sm text-gray-600">/hr</span>
                        </h3>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold text-primary">
                            {spot.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{spot.address}</p>
                      <p className="text-gray-500 text-xs mb-3">
                        {spot.reviews} reviews • Host: {spot.hostName}
                      </p>
                      <button className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!showResults && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Enter your search details above to find parking spots
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
