import { ArrowRight, MessageSquare, Phone, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatsappBotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">بوت واتساب ريادي</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">استخدم بوت واتساب للوصول إلى خدمات منصة ريادي بسهولة من هاتفك</p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">الوصول السريع لخدمات ريادي</h2>
            <p className="text-gray-600 mb-6">
              يمكنك الآن الوصول إلى جميع خدمات منصة ريادي من خلال بوت واتساب، مما يتيح لك:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </div>
                <span>متابعة التدفق النقدي والمصروفات لمشروعك</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </div>
                <span>الاطلاع على فرص التمويل المتاحة والمناسبة لك</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </div>
                <span>الحصول على نصائح مالية مخصصة من المستشار الذكي</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </div>
                <span>إضافة معاملات مالية جديدة وتتبع المصروفات</span>
              </li>
            </ul>
            <Button className="w-full md:w-auto">
              ابدأ المحادثة الآن
              <MessageSquare className="h-4 w-4 mr-2" />
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-[500px] bg-gray-100 rounded-3xl border-8 border-gray-800 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-lg"></div>
              <div className="h-full pt-6 pb-4 px-3 flex flex-col">
                <div className="bg-emerald-600 text-white p-3 rounded-t-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-xs">ر</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">بوت ريادي</p>
                      <p className="text-xs opacity-80">متصل الآن</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-[#e5e1dd] p-2 overflow-y-auto space-y-2">
                  <div className="bg-white p-2 rounded-lg rounded-tr-none max-w-[80%] text-sm shadow-sm">
                    مرحباً بك في بوت ريادي! كيف يمكنني مساعدتك اليوم؟
                  </div>
                  <div className="bg-white p-2 rounded-lg rounded-tr-none max-w-[80%] text-sm shadow-sm">
                    يمكنك الاختيار من القائمة التالية: 1. عرض ملخص مالي 2. فرص التمويل 3. إضافة معاملة 4. التحدث مع
                    المستشار
                  </div>
                  <div className="bg-[#dcf8c6] p-2 rounded-lg rounded-tl-none max-w-[80%] text-sm shadow-sm mr-auto">
                    1
                  </div>
                  <div className="bg-white p-2 rounded-lg rounded-tr-none max-w-[80%] text-sm shadow-sm">
                    إليك ملخص الوضع المالي لمشروعك: الرصيد الحالي: 5,280 ر.ع الإيرادات (هذا الشهر): 3,450 ر.ع المصروفات
                    (هذا الشهر): 1,850 ر.ع هل تريد تفاصيل أكثر؟
                  </div>
                </div>
                <div className="bg-[#e5e1dd] p-2 flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب رسالة..."
                    className="flex-1 px-3 py-2 rounded-full text-sm border-0"
                  />
                  <button className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>سهولة الاستخدام</CardTitle>
              <CardDescription>واجهة بسيطة وسهلة الاستخدام</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                استخدم الأوامر البسيطة والقوائم التفاعلية للوصول إلى جميع خدمات المنصة بسهولة من خلال واتساب.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle>متاح في أي وقت</CardTitle>
              <CardDescription>الوصول للخدمات على مدار الساعة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                احصل على المعلومات والتحديثات في أي وقت ومن أي مكان، دون الحاجة إلى تسجيل الدخول إلى المنصة.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>إشعارات فورية</CardTitle>
              <CardDescription>تنبيهات مهمة لمشروعك</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                استلم إشعارات فورية عن فرص التمويل الجديدة، والتغيرات المهمة في التدفق النقدي، والنصائح المالية.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">كيفية البدء</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
            <div>
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-medium mb-2">أضف الرقم إلى جهات الاتصال</h3>
              <p className="text-sm text-gray-600">أضف رقم +968 1234 5678 إلى جهات الاتصال في هاتفك</p>
            </div>
            <div>
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-medium mb-2">ابدأ محادثة جديدة</h3>
              <p className="text-sm text-gray-600">افتح تطبيق واتساب وابدأ محادثة جديدة مع "بوت ريادي"</p>
            </div>
            <div>
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-medium mb-2">أرسل "ابدأ"</h3>
              <p className="text-sm text-gray-600">أرسل كلمة "ابدأ" لتفعيل البوت والحصول على قائمة الخدمات</p>
            </div>
          </div>
          <Button size="lg">
            ابدأ المحادثة الآن
            <MessageSquare className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
