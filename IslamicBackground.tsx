import { useTheme } from '@/contexts/ThemeContext';

interface IslamicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function IslamicBackground({ children, className = '' }: IslamicBackgroundProps) {
  const { theme, colorScheme } = useTheme();

  const getBackgroundClasses = () => {
    const baseClasses = 'min-h-screen relative overflow-hidden';
    
    if (theme === 'dark') {
      switch (colorScheme) {
        case 'green-white':
          return `${baseClasses} bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900`;
        case 'blue-white':
          return `${baseClasses} bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900`;
        case 'gold-white':
          return `${baseClasses} bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900`;
        case 'teal-white':
          return `${baseClasses} bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900`;
        default:
          return `${baseClasses} bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900`;
      }
    } else {
      switch (colorScheme) {
        case 'green-white':
          return `${baseClasses} bg-gradient-to-br from-emerald-50 via-white to-green-100`;
        case 'blue-white':
          return `${baseClasses} bg-gradient-to-br from-blue-50 via-white to-indigo-100`;
        case 'gold-white':
          return `${baseClasses} bg-gradient-to-br from-amber-50 via-white to-yellow-100`;
        case 'teal-white':
          return `${baseClasses} bg-gradient-to-br from-teal-50 via-white to-cyan-100`;
        default:
          return `${baseClasses} bg-gradient-to-br from-emerald-50 via-white to-green-100`;
      }
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {/* Wavy pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,400 C300,300 600,500 900,350 C1050,275 1150,325 1200,300 L1200,800 L0,800 Z"
            fill="currentColor"
            className={theme === 'dark' ? 'text-white' : 'text-emerald-600'}
          />
        </svg>
      </div>

      {/* Islamic geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}