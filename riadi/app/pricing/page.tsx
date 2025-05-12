"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, CreditCard, Gem, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
          خطط الاشتراك
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          اختر الخطة المناسبة لاحتياجات مشروعك واستفد من مميزات منصة ريادي المتكاملة
        </p>

        <div className="flex items-center justify-center mt-8 mb-12">
          <span className={`mr-3 text-lg ${!isAnnual ? "font-medium text-emerald-600" : "text-gray-500"}`}>شهري</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-emerald-600" />
          <span className={`mr-3 text-lg ${isAnnual ? "font-medium text-emerald-600" : "text-gray-500"}`}>
            سنوي <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mr-1">وفر 20%</Badge>
          </span>
        </div>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {/* الخطة المجانية */}
        <motion.div variants={item}>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-gray-600" />
              </div>
              <CardTitle className="text-2xl">الخطة المجانية</CardTitle>
              <CardDescription className="text-gray-500">ابدأ رحلتك الريادية مجاناً</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <p className="text-3xl font-bold">
                  {isAnnual ? "0 ر.ع" : "0 ر.ع"}
                  <span className="text-sm font-normal text-gray-500">{isAnnual ? " / سنوياً" : " / شهرياً"}</span>
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">إدارة مالية أساسية</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">عرض فرص التمويل المتاحة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">الوصول للمجتمع</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">3 استشارات شهرياً مع المستشار الذكي</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تخزين البيانات لمدة 3 أشهر</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  ابدأ مجاناً
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        {/* الخطة الاحترافية */}
        <motion.div variants={item}>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 text-sm font-medium">
              الأكثر شيوعاً
            </div>
            <CardHeader className="pb-4">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Gem className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl">الخطة الاحترافية</CardTitle>
              <CardDescription className="text-gray-500">لرواد الأعمال الطموحين</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <p className="text-3xl font-bold">
                  {isAnnual ? "96 ر.ع" : "10 ر.ع"}
                  <span className="text-sm font-normal text-gray-500">{isAnnual ? " / سنوياً" : " / شهرياً"}</span>
                </p>
                {isAnnual && <p className="text-sm text-emerald-600">توفير 24 ر.ع</p>}
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">جميع مميزات الخطة المجانية</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تحليلات مالية متقدمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">توصيات مخصصة لفرص التمويل</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">استشارات غير محدودة مع المستشار الذكي</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تخزين البيانات لمدة سنة كاملة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">دعم عبر البريد الإلكتروني</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register?plan=pro" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors">اشترك الآن</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        {/* الخطة المؤسسية */}
        <motion.div variants={item}>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">الخطة المؤسسية</CardTitle>
              <CardDescription className="text-gray-500">للشركات والمؤسسات</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <p className="text-3xl font-bold">
                  {isAnnual ? "240 ر.ع" : "25 ر.ع"}
                  <span className="text-sm font-normal text-gray-500">{isAnnual ? " / سنوياً" : " / شهرياً"}</span>
                </p>
                {isAnnual && <p className="text-sm text-emerald-600">توفير 60 ر.ع</p>}
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">جميع مميزات الخطة الاحترافية</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">إدارة حسابات متعددة (حتى 5 مستخدمين)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تقارير مالية متقدمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تكامل مع برامج المحاسبة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">تخزين البيانات غير محدود</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">دعم فني على مدار الساعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">جلسات استشارية مع خبراء ماليين</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register?plan=enterprise" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  اطلب عرضاً
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">أسئلة شائعة</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-right">
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">هل يمكنني تغيير خطتي في أي وقت؟</h3>
            <p className="text-gray-600">
              نعم، يمكنك الترقية إلى خطة أعلى في أي وقت. كما يمكنك التخفيض إلى خطة أقل عند انتهاء فترة اشتراكك الحالية.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">هل هناك فترة تجريبية للخطط المدفوعة؟</h3>
            <p className="text-gray-600">
              نعم، نقدم فترة تجريبية مجانية لمدة 14 يوماً للخطة الاحترافية، يمكنك خلالها تجربة جميع المميزات قبل
              الاشتراك.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">كيف يمكنني إلغاء اشتراكي؟</h3>
            <p className="text-gray-600">
              يمكنك إلغاء اشتراكك في أي وقت من خلال صفحة إعدادات الحساب. سيظل حسابك نشطاً حتى نهاية فترة الفوترة الحالية.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">هل يمكنني استرداد أموالي؟</h3>
            <p className="text-gray-600">
              نقدم ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تكن راضياً عن خدماتنا، يمكنك طلب استرداد كامل المبلغ خلال
              أول 30 يوماً من اشتراكك.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
