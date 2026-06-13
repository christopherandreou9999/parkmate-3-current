import { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    carRego: '',
    vehicleType: 'Car',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', formData);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-2">My Profile</h1>
        <p className="text-gray-600 mb-8">Update your information</p>

        {/* Profile Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Smith"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Car Rego */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Car Registration
              </label>
              <input
                type="text"
                name="carRego"
                value={formData.carRego}
                onChange={handleInputChange}
                placeholder="ABC 123"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Type of Vehicle
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Motorbike">Motorbike</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition mt-8"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
