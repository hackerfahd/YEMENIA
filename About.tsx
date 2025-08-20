import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Share2, ArrowRight, Heart, Info, User, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import IslamicBackground from '@/components/IslamicBackground';
import NavigationMenu from '@/components/NavigationMenu';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const palestinePrayer = `اللهم انصر إخواننا في فلسطين، وفرج عنهم، واحقن دماءهم، وأعنهم على عدوهم، اللهم إنا نسألك لهم النصر والتمكين، والثبات على دينك يا رب العالمين. اللهم احفظ المسجد الأقصى والقدس الشريف، واجعلها آمنة مطمئنة يا أرحم الراحمين.`;

  const handleCopyPrayer = () => {
    navigator.clipboard.writeText(palestinePrayer);
    toast.success('تم نسخ الدعاء لفلسطين');
  };

  const handleSharePrayer = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'دعاء لفلسطين',
          text: palestinePrayer,
        });
      } catch (error) {
        navigator.clipboard.writeText(palestinePrayer);
        toast.success('تم نسخ الدعاء للمشاركة');
      }
    } else {
      navigator.clipboard.writeText(palestinePrayer);
      toast.success('تم نسخ الدعاء للمشاركة');
    }
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
            حول التطبيق
          </h1>
        </div>

        {/* App Info */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              <Info className="w-5 h-5" />
              معلومات التطبيق
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h2 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
              }`} style={{ fontFamily: 'Amiri, serif' }}>
                ضاعف حسناتك
              </h2>
              <p className={`text-lg mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                تطبيق القرآن اليومي
              </p>
            </div>

            <div className={`p-4 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                يهدف هذا التطبيق إلى تقديم آية قرآنية يومية مع معناها لمساعدتك على 
                التدبر والتأمل في كتاب الله العزيز. نسأل الله أن يبارك في هذا العمل 
                وأن يجعله في ميزان حسناتنا وحسناتكم.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>الإصدار:</span>
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>1.0.0</span>
            </div>
          </CardContent>
        </Card>

        {/* Developer Info */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              <User className="w-5 h-5" />
              معلومات المطور
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                فهد المنصوب
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                مطور التطبيق
              </p>
            </div>

            <div className={`p-4 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm text-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
                "نسأل الله أن يتقبل هذا العمل وأن يجعله نافعًا لجميع المسلمين"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Palestine Prayer */}
        <Card className={`mb-6 shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              <MapPin className="w-5 h-5" />
              دعاء لفلسطين
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`p-4 rounded-lg border-r-4 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-emerald-500 border-gray-700' 
                : 'bg-emerald-50 border-emerald-500 border-emerald-200'
            }`}>
              <p 
                className={`leading-relaxed text-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                }`}
                style={{ 
                  fontFamily: 'Amiri, serif',
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                {palestinePrayer}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={handleCopyPrayer}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Copy className="w-4 h-4" />
                نسخ الدعاء
              </Button>

              <Button
                onClick={handleSharePrayer}
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Share2 className="w-4 h-4" />
                مشاركة الدعاء
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <Card className={`shadow-lg border-0 ${
          theme === 'dark' 
            ? 'bg-gray-900/60 backdrop-blur-lg' 
            : 'bg-white/70 backdrop-blur-lg'
        }`}>
          <CardContent className="p-4 text-center">
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              © 2024 ضاعف حسناتك - جميع الحقوق محفوظة
            </p>
            <p className={`text-xs mt-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`} style={{ fontFamily: 'Noto Sans Arabic, sans-serif' }}>
              تم التطوير بـ <Heart className="w-3 h-3 inline text-red-500" /> لخدمة الإسلام والمسلمين
            </p>
          </CardContent>
        </Card>
      </div>

      <NavigationMenu />
    </IslamicBackground>
  );
}