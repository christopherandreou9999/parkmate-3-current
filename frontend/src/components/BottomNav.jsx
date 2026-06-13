import { useLocation, Link } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: '🏠', path: '/search' },
    { label: 'Search', icon: '🔍', path: '/search' },
    { label: 'Profile', icon: '👤', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
                location.pathname === item.path || (item.path === '/search' && location.pathname.startsWith('/search'))
                  ? 'text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

