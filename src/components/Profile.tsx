import React, { useState } from 'react';
import { Car, ArrowLeft, User, Mail, Phone, MapPin, Camera, Edit3, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VehicleInfo {
  make: string;
  model: string;
  year: string;
  color: string;
  plateNumber: string;
}

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  vehicle: VehicleInfo;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
    bio: 'Professional driver with 5+ years of experience. Committed to providing safe and comfortable rides.',
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      year: '2022',
      color: 'Silver',
      plateNumber: 'ABC-1234'
    }
  });
  const [tempData, setTempData] = useState<ProfileData>(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'vehicle') {
        setTempData(prev => ({
          ...prev,
          vehicle: {
            ...prev.vehicle,
            [child]: value
          }
        }));
      }
    } else {
      setTempData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                RideAI
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                    {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                      <Camera className="h-4 w-4 text-gray-600" />
                    </button>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditing ? tempData.firstName + ' ' + tempData.lastName : profileData.firstName + ' ' + profileData.lastName}
                </h2>
                <p className="text-gray-600">Professional Driver</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Total Rides</span>
                  <span className="font-semibold text-gray-900">1,247</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold text-gray-900">4.9 ⭐</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={isEditing ? tempData.firstName : profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={isEditing ? tempData.lastName : profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={isEditing ? tempData.email : profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={isEditing ? tempData.phone : profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={isEditing ? tempData.address : profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    name="bio"
                    rows={3}
                    value={isEditing ? tempData.bio : profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                  <input
                    type="text"
                    name="vehicle.make"
                    value={isEditing ? tempData.vehicle.make : profileData.vehicle.make}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                  <input
                    type="text"
                    name="vehicle.model"
                    value={isEditing ? tempData.vehicle.model : profileData.vehicle.model}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    name="vehicle.year"
                    value={isEditing ? tempData.vehicle.year : profileData.vehicle.year}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <input
                    type="text"
                    name="vehicle.color"
                    value={isEditing ? tempData.vehicle.color : profileData.vehicle.color}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">License Plate</label>
                  <input
                    type="text"
                    name="vehicle.plateNumber"
                    value={isEditing ? tempData.vehicle.plateNumber : profileData.vehicle.plateNumber}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 