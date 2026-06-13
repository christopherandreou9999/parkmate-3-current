import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { BookingContext } from '../context/BookingContext';
import { MOCK_PARKING_SPOTS } from '../constants/mockData';

export default function Search() {
  const { searchParams, setSearchParams } = useContext(BookingContext);
  const [showResults, setShowResults] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const autocompleteOptions = ['2 Latrobe Street'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
    if (name === 'destination') {
      setShowAutocomplete(value.length > 0);
    }
  };

  const handleAutocompleteClick = (address) => {
    setSearchParams({ ...searchParams, destination: address });
    setShowAutocomplete(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Location Search Bar */}
        <div className="mb-6 relative">
          <div className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-primary rounded-lg">
            <input
              type="text"
              name="destination"
              value={searchParams.destination}
              onChange={handleInputChange}
              placeholder="Where are you heading?"
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          {/* Autocomplete Dropdown */}
          {showAutocomplete && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-10">
              {autocompleteOptions.map((address, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAutocompleteClick(address)}
                  className="w-full text-left px-4 py-2 hover:bg-background text-gray-700 first:rounded-t-lg last:rounded-b-lg"
                >
                  📍 {address}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Map Placeholder */}
        <div className="mb-6 bg-gray-300 rounded-lg h-48 overflow-hidden border-2 border-accent border-opacity-30">
          <img
            src="https://placehold.co/600x200/93C5FD/1B3A5C?text=Map+View"
            alt="Map of Victoria, Australia"
            className="w-full h-full object-cover"
          />
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
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                      <img
                        src={spot.photo}
                        alt="Parking spot"
                        className="w-full h-full object-cover"
                      />
                    </div>
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
