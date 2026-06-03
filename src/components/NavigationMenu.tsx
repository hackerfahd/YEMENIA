import { Button } from '@/components/ui/button';
import { Home, Settings, Palette, Heart, Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function NavigationMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  const menuItems = [
    { path: '/', icon: Home, label: 'الرئيسية' },
    { path: '/settings', icon: Settings, label: 'الإعدادات' },
    { path: '/colors', icon: Palette, label: 'الألوان' },
    { path: '/favorites', icon: Heart, label: 'المفضلة' },
    { path: '/about', icon: Info, label: 'حول التطبيق' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className={`backdrop-blur-lg border-t ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="flex justify-around items-center py-2 px-2">
          {menuItems.map(({ path, icon: Icon, label }) => (
            <Button
              key={path}
              variant={location.pathname === path ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate(path)}
              className={`flex flex-col items-center justify-center min-w-[60px] h-16 text-xs ${
                location.pathname === path
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}