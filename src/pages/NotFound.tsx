import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowRight } from 'lucide-react';
import IslamicBackground from '@/components/IslamicBackground';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <IslamicBackground>
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <Card className={`max-w-md w-full shadow-2xl border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardContent className="p-8 text-center">
            <div className={`text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              404
            </div>
            
            <h1 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              الصفحة غير موجودة
            </h1>
            
            <p className={`text-sm mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => navigate('/')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Home className="w-4 h-4 ml-2" />
                العودة للرئيسية
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className={`w-full ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للخلف
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </IslamicBackground>
  );
}