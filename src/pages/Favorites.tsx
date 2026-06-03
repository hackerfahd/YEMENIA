import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Share2, Trash2, ArrowRight, Heart } from 'lucide-react';
import { toast } from 'sonner';
import IslamicBackground from '@/components/IslamicBackground';
import NavigationMenu from '@/components/NavigationMenu';
import { useSettings } from '@/contexts/SettingsContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { VerseData } from '@/data/verses';

export default function Favorites() {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites, arabicFontSize, translationFontSize } = useSettings();
  const { theme } = useTheme();

  const handleCopy = (verse: VerseData) => {
    const text = `${verse.arabic}\n\n${verse.translation}\n\n(${verse.surah} - ${verse.ayah})`;
    navigator.clipboard.writeText(text);
    toast.success('تم نسخ الآية والمعنى');
  };

  const handleShare = async (verse: VerseData) => {
    const text = `${verse.arabic}\n\n${verse.translation}\n\n(${verse.surah} - ${verse.ayah})\n\nمن تطبيق: ضاعف حسناتك`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'آية من القرآن الكريم',
          text: text,
        });
      } catch (error) {
        navigator.clipboard.writeText(text);
        toast.success('تم نسخ الآية للمشاركة');
      }
    } else {
      navigator.clipboard.writeText(text);
      toast.success('تم نسخ الآية للمشاركة');
    }
  };

  const handleRemove = (id: string) => {
    removeFromFavorites(id);
    toast.success('تم إزالة الآية من المفضلة');
  };

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
            المفضلة ({favorites.length})
          </h1>
        </div>

        {/* Empty State */}
        {favorites.length === 0 && (
          <Card className={`shadow-lg border-0 ${
            theme === 'dark' 
              ? 'bg-gray-900/80 backdrop-blur-lg' 
              : 'bg-white/90 backdrop-blur-lg'
          }`}>
            <CardContent className="p-8 text-center">
              <Heart className={`w-16 h-16 mx-auto mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`} />
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                لا توجد آيات مفضلة بعد
              </h3>
              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                ابدأ بإضافة الآيات التي تحبها إلى المفضلة
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                العودة للرئيسية
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Favorites List */}
        <div className="space-y-4">
          {favorites.map((verse) => (
            <Card 
              key={verse.id} 
              className={`shadow-lg border-0 ${
                theme === 'dark' 
                  ? 'bg-gray-900/80 backdrop-blur-lg' 
                  : 'bg-white/90 backdrop-blur-lg'
              }`}
            >
              <CardContent className="p-6">
                {/* Arabic Text */}
                <div className="text-center mb-4">
                  <p 
                    className={`leading-relaxed ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                    style={{ 
                      fontSize: `${Math.max(arabicFontSize - 4, 16)}px`,
                      fontFamily: 'Amiri, serif',
                      lineHeight: '1.8'
                    }}
                  >
                    {verse.arabic}
                  </p>
                </div>

                {/* Translation */}
                <div className="text-center mb-4">
                  <p 
                    className={`leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    style={{ 
                      fontSize: `${Math.max(translationFontSize - 2, 12)}px`,
                      fontFamily: 'Noto Sans Arabic, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    {verse.translation}
                  </p>
                </div>

                {/* Surah Info */}
                <div className="text-center mb-4">
                  <p className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                    سورة {verse.surah} - الآية {verse.ayah}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    onClick={() => handleCopy(verse)}
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
                    onClick={() => handleShare(verse)}
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
                    onClick={() => handleRemove(verse.id)}
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'border-red-600 text-red-400 hover:bg-red-900/20'
                        : 'border-red-200 text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Trash2 className="w-4 h-4" />
                    حذف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <NavigationMenu />
    </IslamicBackground>
  );
}