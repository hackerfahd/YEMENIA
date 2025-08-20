import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import IslamicBackground from '@/components/IslamicBackground';
import NavigationMenu from '@/components/NavigationMenu';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight, Palette, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Colors() {
  const navigate = useNavigate();
  const { theme, colorScheme, setColorScheme } = useTheme();

  const colorSchemes = [
    {
      id: 'green-white' as const,
      name: 'أخضر وأبيض',
      description: 'الألوان الكلاسيكية الإسلامية',
      gradient: 'from-emerald-500 to-green-600',
      preview: theme === 'dark' 
        ? 'bg-gradient-to-r from-emerald-900 to-green-800' 
        : 'bg-gradient-to-r from-emerald-100 to-green-200'
    },
    {
      id: 'blue-white' as const,
      name: 'أزرق وأبيض',
      description: 'ألوان السماء والبحر',
      gradient: 'from-blue-500 to-indigo-600',
      preview: theme === 'dark' 
        ? 'bg-gradient-to-r from-blue-900 to-indigo-800' 
        : 'bg-gradient-to-r from-blue-100 to-indigo-200'
    },
    {
      id: 'gold-white' as const,
      name: 'ذهبي وأبيض',
      description: 'ألوان الذهب والفخامة',
      gradient: 'from-amber-500 to-yellow-600',
      preview: theme === 'dark' 
        ? 'bg-gradient-to-r from-amber-900 to-yellow-800' 
        : 'bg-gradient-to-r from-amber-100 to-yellow-200'
    },
    {
      id: 'teal-white' as const,
      name: 'تركوازي وأبيض',
      description: 'ألوان البحر الهادئ',
      gradient: 'from-teal-500 to-cyan-600',
      preview: theme === 'dark' 
        ? 'bg-gradient-to-r from-teal-900 to-cyan-800' 
        : 'bg-gradient-to-r from-teal-100 to-cyan-200'
    }
  ];

  return (
    <IslamicBackground>
      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/settings')}
            className={theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
          <h1 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-emerald-800'
          }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
            الألوان والخلفية
          </h1>
        </div>

        {/* Current Preview */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              المعاينة الحالية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <div className={`h-32 ${colorSchemes.find(s => s.id === colorScheme)?.preview}`}>
                <div className="h-full flex items-center justify-center">
                  <div className={`text-center p-4 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-900/80 text-white' 
                      : 'bg-white/90 text-gray-800'
                  }`}>
                    <p className="text-lg mb-2" style={{ fontFamily: 'Amiri, serif' }}>
                      وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
                    </p>
                    <p className="text-sm" style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                      ومن يتق الله يجعل له من أمره مخرجًا
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Scheme Options */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              <Palette className="w-5 h-5" />
              اختيار نظام الألوان
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {colorSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  colorScheme === scheme.id
                    ? theme === 'dark'
                      ? 'border-emerald-500 bg-emerald-900/20'
                      : 'border-emerald-500 bg-emerald-50'
                    : theme === 'dark'
                      ? 'border-gray-600 hover:border-gray-500'
                      : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setColorScheme(scheme.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                      {scheme.name}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                      {scheme.description}
                    </p>
                  </div>
                  {colorScheme === scheme.id && (
                    <Check className="w-5 h-5 text-emerald-500" />
                  )}
                </div>
                
                {/* Color Preview */}
                <div className={`h-16 rounded-md ${scheme.preview}`}>
                  <div className="h-full flex items-center justify-center">
                    <div className={`text-xs px-3 py-1 rounded ${
                      theme === 'dark' 
                        ? 'bg-gray-900/80 text-white' 
                        : 'bg-white/90 text-gray-800'
                    }`} style={{ fontFamily: 'Amiri, serif' }}>
                      بسم الله الرحمن الرحيم
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className={`shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/60 backdrop-blur-lg' 
            : 'bg-white/70 backdrop-blur-lg'
        }`}>
          <CardContent className="p-4">
            <p className={`text-sm text-center ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              💡 يمكنك تغيير الألوان في أي وقت من هذه الصفحة
            </p>
          </CardContent>
        </Card>
      </div>

      <NavigationMenu />
    </IslamicBackground>
  );
}