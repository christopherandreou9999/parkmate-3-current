from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock parking spots data
PARKING_SPOTS = [
    {
        "id": 1,
        "address": "123 Main Street, Downtown",
        "price": 5.5,
        "rating": 4.8,
        "reviews": 24,
        "hostName": "John Smith",
        "photo": "https://images.unsplash.com/photo-1445924908126-06c5f0b1efca?w=400&h=300&fit=crop",
        "availableTimes": ["09:00 AM", "02:00 PM", "06:00 PM"],
        "description": "Clean, well-lit driveway near downtown.",
    },
    {
        "id": 2,
        "address": "456 Oak Avenue, Midtown",
        "price": 4.8,
        "rating": 4.6,
        "reviews": 18,
        "hostName": "Sarah Johnson",
        "photo": "https://images.unsplash.com/photo-1506521781303-52581ce3e6dc?w=400&h=300&fit=crop",
        "availableTimes": ["08:00 AM", "01:00 PM", "05:00 PM"],
        "description": "Spacious parking spot with 24/7 security.",
    },
    {
        "id": 3,
        "address": "789 Pine Road, Suburbs",
        "price": 3.5,
        "rating": 4.9,
        "reviews": 32,
        "hostName": "Mike Chen",
        "photo": "https://images.unsplash.com/photo-1523217582562-430f63602f46?w=400&h=300&fit=crop",
        "availableTimes": ["07:00 AM", "12:00 PM", "04:00 PM"],
        "description": "Covered parking in quiet residential area.",
    },
    {
        "id": 4,
        "address": "321 Elm Street, Arts District",
        "price": 6.2,
        "rating": 4.7,
        "reviews": 15,
        "hostName": "Emma Wilson",
        "photo": "https://images.unsplash.com/photo-1551632786-e91434201d6c?w=400&h=300&fit=crop",
        "availableTimes": ["10:00 AM", "03:00 PM", "08:00 PM"],
        "description": "Premium spot near restaurants and galleries.",
    },
    {
        "id": 5,
        "address": "654 Maple Lane, Riverside",
        "price": 4.0,
        "rating": 4.5,
        "reviews": 22,
        "hostName": "David Brown",
        "photo": "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop",
        "availableTimes": ["09:30 AM", "02:30 PM", "07:00 PM"],
        "description": "Waterfront parking with scenic views.",
    },
    {
        "id": 6,
        "address": "987 Cedar Court, Central",
        "price": 5.8,
        "rating": 4.8,
        "reviews": 28,
        "hostName": "Lisa Anderson",
        "photo": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        "availableTimes": ["08:30 AM", "01:30 PM", "06:30 PM"],
        "description": "Convenient central location near metro.",
    },
]


@app.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "ok", "message": "ParkMate API is running"}), 200


@app.route("/api/spots", methods=["GET"])
def get_spots():
    """Get all parking spots"""
    return jsonify({"spots": PARKING_SPOTS, "total": len(PARKING_SPOTS)}), 200


@app.route("/api/spots/<int:spot_id>", methods=["GET"])
def get_spot(spot_id):
    """Get a specific parking spot"""
    spot = next((s for s in PARKING_SPOTS if s["id"] == spot_id), None)
    if not spot:
        return jsonify({"error": "Spot not found"}), 404
    return jsonify(spot), 200


@app.route("/api/bookings", methods=["POST"])
def create_booking():
    """Create a booking (placeholder for now)"""
    return jsonify(
        {
            "message": "Booking created successfully",
            "bookingId": "BK123456",
            "referenceNumber": "PM" + str(int(__import__("time").time()))[-8:],
        }
    ), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)
