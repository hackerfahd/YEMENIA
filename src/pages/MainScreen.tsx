import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Share2, RefreshCw, Heart, HeartOff } from 'lucide-react';
import { toast } from 'sonner';
import IslamicBackground from '@/components/IslamicBackground';
import NavigationMenu from '@/components/NavigationMenu';
import { useSettings } from '@/contexts/SettingsContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getDailyVerse, verses, VerseData } from '@/data/verses';

export default function MainScreen() {
  const { 
    arabicFontSize, 
    translationFontSize, 
    addToFavorites, 
    removeFromFavorites, 
    isFavorite,
    dailyVerse,
    setDailyVerse
  } = useSettings();
  const { theme } = useTheme();
  const [currentVerse, setCurrentVerse] = useState<VerseData | null>(null);

  useEffect(() => {
    if (!dailyVerse) {
      const verse = getDailyVerse();
      setDailyVerse(verse);
      setCurrentVerse(verse);
    } else {
      setCurrentVerse(dailyVerse);
    }
  }, [dailyVerse, setDailyVerse]);

  const handleCopy = () => {
    if (currentVerse) {
      const text = `${currentVerse.arabic}\n\n${currentVerse.translation}\n\n(${currentVerse.surah} - ${currentVerse.ayah})`;
      navigator.clipboard.writeText(text);
      toast.success('تم نسخ الآية والمعنى');
    }
  };

  const handleShare = async () => {
    if (currentVerse) {
      const text = `${currentVerse.arabic}\n\n${currentVerse.translation}\n\n(${currentVerse.surah} - ${currentVerse.ayah})\n\nمن تطبيق: ضاعف حسناتك`;
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'آية من القرآن الكريم',
            text: text,
          });
        } catch (error) {
          // Fallback to clipboard
          navigator.clipboard.writeText(text);
          toast.success('تم نسخ الآية للمشاركة');
        }
      } else {
        navigator.clipboard.writeText(text);
        toast.success('تم نسخ الآية للمشاركة');
      }
    }
  };

  const handleRefresh = () => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    setCurrentVerse(randomVerse);
    toast.success('تم تحديث الآية');
  };

  const toggleFavorite = () => {
    if (currentVerse) {
      if (isFavorite(currentVerse.id)) {
        removeFromFavorites(currentVerse.id);
        toast.success('تم إزالة الآية من المفضلة');
      } else {
        addToFavorites(currentVerse);
        toast.success('تم إضافة الآية للمفضلة');
      }
    }
  };

  if (!currentVerse) {
    return (
      <IslamicBackground>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600"></div>
        </div>
        <NavigationMenu />
      </IslamicBackground>
    );
  }

  return (
    <IslamicBackground>
      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-emerald-800'
          }`} style={{ fontFamily: 'Amiri, serif' }}>
            ضاعف حسناتك
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-emerald-700'
          }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
            آية اليوم من القرآن الكريم
          </p>
        </div>

        {/* Main Verse Card */}
        <Card className={`mb-6 shadow-2xl border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardContent className="p-8">
            {/* Arabic Text */}
            <div className="text-center mb-6">
              <p 
                className={`leading-relaxed ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
                style={{ 
                  fontSize: `${arabicFontSize}px`,
                  fontFamily: 'Amiri, serif',
                  lineHeight: '1.8'
                }}
              >
                {currentVerse.arabic}
              </p>
            </div>

            {/* Translation */}
            <div className="text-center mb-6">
              <p 
                className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ 
                  fontSize: `${translationFontSize}px`,
                  fontFamily: 'Noto Sans Arabic, sans-serif',
                  lineHeight: '1.6'
                }}
              >
                {currentVerse.translation}
              </p>
            </div>

            {/* Surah Info */}
            <div className="text-center mb-6">
              <p className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                سورة {currentVerse.surah} - الآية {currentVerse.ayah}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Copy className="w-4 h-4" />
                نسخ
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Share2 className="w-4 h-4" />
                مشاركة
              </Button>

              <Button
                onClick={handleRefresh}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
                تحديث
              </Button>

              <Button
                onClick={toggleFavorite}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  isFavorite(currentVerse.id)
                    ? theme === 'dark'
                      ? 'border-red-600 text-red-400 hover:bg-red-900/20'
                      : 'border-red-200 text-red-600 hover:bg-red-50'
                    : theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                {isFavorite(currentVerse.id) ? (
                  <HeartOff className="w-4 h-4" />
                ) : (
                  <Heart className="w-4 h-4" />
                )}
                {isFavorite(currentVerse.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Daily Counter */}
        <Card className={`shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/60 backdrop-blur-lg' 
            : 'bg-white/70 backdrop-blur-lg'
        }`}>
          <CardContent className="p-4 text-center">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              تحديث آلي كل 24 ساعة
            </p>
            <p className={`text-xs mt-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              بارك الله فيك وضاعف حسناتك
            </p>
          </CardContent>
        </Card>
      </div>

      <NavigationMenu />
    </IslamicBackground>
  );
}