import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import IslamicBackground from '@/components/IslamicBackground';
import NavigationMenu from '@/components/NavigationMenu';
import { useSettings } from '@/contexts/SettingsContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight, Type, Palette, Heart, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const { 
    arabicFontSize, 
    translationFontSize, 
    setArabicFontSize, 
    setTranslationFontSize,
    favorites
  } = useSettings();
  const { theme, setTheme } = useTheme();

  return (
    <IslamicBackground>
      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className={theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
          <h1 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-emerald-800'
          }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
            الإعدادات
          </h1>
        </div>

        {/* Theme Settings */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              المظهر
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                الوضع الليلي
              </Label>
              <Switch
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Font Size Settings */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              <Type className="w-5 h-5" />
              حجم الخط
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Arabic Font Size */}
            <div>
              <Label className={`text-sm mb-3 block ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                حجم خط الآيات العربية: {arabicFontSize}px
              </Label>
              <Slider
                value={[arabicFontSize]}
                onValueChange={(value) => setArabicFontSize(value[0])}
                max={36}
                min={16}
                step={2}
                className="w-full"
              />
              <div className="mt-3 p-3 rounded-lg border" style={{
                fontSize: `${arabicFontSize}px`,
                fontFamily: 'Amiri, serif',
                backgroundColor: theme === 'dark' ? '#1f2937' : '#f9fafb',
                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                color: theme === 'dark' ? '#ffffff' : '#1f2937'
              }}>
                وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
              </div>
            </div>

            {/* Translation Font Size */}
            <div>
              <Label className={`text-sm mb-3 block ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                حجم خط المعنى: {translationFontSize}px
              </Label>
              <Slider
                value={[translationFontSize]}
                onValueChange={(value) => setTranslationFontSize(value[0])}
                max={24}
                min={12}
                step={1}
                className="w-full"
              />
              <div className="mt-3 p-3 rounded-lg border" style={{
                fontSize: `${translationFontSize}px`,
                fontFamily: 'Noto Sans Arabic, sans-serif',
                backgroundColor: theme === 'dark' ? '#1f2937' : '#f9fafb',
                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                color: theme === 'dark' ? '#d1d5db' : '#4b5563'
              }}>
                ومن يتق الله يجعل له من أمره مخرجًا
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              الوصول السريع
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className={`w-full justify-between ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
              }`}
              onClick={() => navigate('/colors')}
            >
              <span className="flex items-center gap-2" style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                <Palette className="w-4 h-4" />
                الألوان والخلفية
              </span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Button>

            <Button
              variant="outline"
              className={`w-full justify-between ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
              }`}
              onClick={() => navigate('/favorites')}
            >
              <span className="flex items-center gap-2" style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                <Heart className="w-4 h-4" />
                المفضلة ({favorites.length})
              </span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <NavigationMenu />
    </IslamicBackground>
  );
}