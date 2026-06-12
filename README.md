# ParkMate - Parking Spot Booking App

An Airbnb-style application for booking parking spots. Find available parking near your destination and book from verified hosts.

## Project Structure

```
ParkMate-3/
├── frontend/          # React + Vite + React Router + Tailwind CSS
└── backend/           # Flask API
```

## Tech Stack

### Frontend
- **React 18** with Vite bundler
- **React Router v6** for navigation
- **Tailwind CSS** for styling
- Navy blue color scheme (#1B3A5C primary, #2E75B6 accent)
- Fully responsive (mobile, tablet, desktop)

### Backend
- **Flask** REST API
- **Flask-CORS** for cross-origin requests
- Mock parking spot data

## Quick Start

### Frontend Setup & Run

```bash
cd frontend
npm install                    # Install dependencies (already done)
npm run dev                    # Start dev server → http://localhost:5173
```

### Backend Setup & Run

```bash
cd backend
pip install -r requirements.txt  # Install dependencies
python app.py                    # Start Flask server → http://localhost:5000
```

**Note on Python:** If `python` is not found, try `python3` instead.

## Features Implemented

### 5 Connected Pages

1. **Login/Signup** (`/auth`)
   - Toggle between login and signup modes
   - Email + password inputs
   - Google continue button (UI only)

2. **Search** (`/search`)
   - Search form: destination, date, start time, duration
   - Results grid showing 6 mock parking spots
   - Each spot card shows: price/hr, rating, address, host name

3. **Spot Details** (`/spot/:id`)
   - Full spot information with large photo
   - Host details and available times
   - Booking summary sidebar with pricing
   - "Book This Spot" button

4. **Book & Pay** (`/book/:id`)
   - Booking summary with spot details
   - 4 payment method options (Credit Card, PayPal, Apple Pay, Bank Transfer)
   - Order summary sidebar
   - "Confirm & Pay" button

5. **Confirmation** (`/confirmation`)
   - Success page with booking reference number
   - Complete booking details
   - "Open in Maps" button (UI only)
   - "Book Another Spot" button for chaining bookings

### Design System

- **Colors**: Navy (#1B3A5C), Accent Blue (#2E75B6), Light Background (#F5F7FA)
- **Rounded corners** on all components (8px default)
- **Card-based layouts** throughout
- **Mobile-first responsive design** with Tailwind breakpoints
- Clean, modern UI with professional spacing

### Navigation

- All pages connected via React Router
- Working back buttons and navigation links
- Context API for state management across booking flow
- Booking data persists as you navigate from search → details → payment → confirmation

## Backend API Endpoints

- `GET /api/health` - Health check
- `GET /api/spots` - Get all parking spots
- `GET /api/spots/<id>` - Get specific parking spot
- `POST /api/bookings` - Create booking (placeholder)

## Data Flow

1. User logs in or signs up on `/auth`
2. Navigates to `/search` to enter search criteria
3. Selects a spot from results → `/spot/:id`
4. Clicks "Book This Spot" → `/book/:id`
5. Selects payment method and confirms → `/confirmation`
6. Success page with booking reference

## Next Steps (For Later)

- Connect to Supabase database
- Implement real authentication
- Add real payment processing
- Implement Maps integration
- Add user profile and booking history
- Implement host management (list parking spots)
- Add reviews and ratings system

## Styling Notes

- All styling uses **Tailwind CSS** utility classes
- No custom CSS files needed (using Tailwind @tailwind directives)
- Design tokens defined in `tailwind.config.js`
- Mobile responsive breakpoints: `sm:`, `md:`, `lg:`

---

**Assignment Ready!** All 5 pages are built with working navigation, placeholder data, and a clean design system. Ready for database integration in the next phase.