import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">ParkMate</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/auth" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
              Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
