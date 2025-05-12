"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CreditCard,
  DollarSign,
  Download,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  MessageSquare,
  PieChart,
  Plus,
  Settings,
  TrendingUp,
  Users,
  X,
  Bot,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(75), 500)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* الشريط الجانبي للجوال */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-40"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* الشريط الجانبي */}
      <aside
        className={`
        fixed inset-y-0 right-0 z-30 w-64 bg-white border-l transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        lg:static lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold text-emerald-600">ريادي</span>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-emerald-500">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  عم
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">عمر المعمري</p>
                <p className="text-sm text-gray-500">مشروع "تقنية بلس"</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 font-medium"
            >
              <Home className="h-5 w-5" />
              <span>لوحة التحكم</span>
            </Link>
            <Link
              href="/financial-management"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <BarChart3 className="h-5 w-5" />
              <span>التحليل المالي</span>
            </Link>
            <Link
              href="/funding-opportunities"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <CreditCard className="h-5 w-5" />
              <span>فرص التمويل</span>
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>المجتمع</span>
            </Link>
            <Link
              href="/advisor"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>المستشار الذكي</span>
            </Link>
            <Link
              href="/ai-chat"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Bot className="h-5 w-5" />
              <span>المحادثة الذكية</span>
              <Badge className="bg-emerald-100 text-emerald-800 text-xs">جديد</Badge>
            </Link>
            <Link
              href="/whatsapp-bot"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>بوت واتساب</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>الملف الشخصي</span>
            </Link>
            <Link
              href="/subscriptions"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة الاشتراك</span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>خطط الاشتراك</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>الإعدادات</span>
            </Link>
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5 mr-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold">مرحباً، عمر</h1>
            <p className="text-gray-500">هذه نظرة عامة على مشروعك ووضعك المالي</p>
          </motion.header>

          {/* البطاقات الإحصائية */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {[
              {
                title: "الرصيد الحالي",
                value: "5,280 ر.ع",
                change: "+12%",
                changeType: "positive",
                icon: DollarSign,
                color: "emerald",
              },
              {
                title: "المصروفات الشهرية",
                value: "1,850 ر.ع",
                change: "+5%",
                changeType: "negative",
                icon: BarChart3,
                color: "red",
              },
              {
                title: "فرص التمويل",
                value: "8",
                subtitle: "3 فرص جديدة هذا الأسبوع",
                icon: CreditCard,
                color: "blue",
              },
              {
                title: "نسبة اكتمال الملف",
                value: "75%",
                progress: true,
                icon: Users,
                color: "purple",
              },
            ].map((card, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{card.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                      </div>
                      <div className={`bg-${card.color}-100 p-2 rounded-full`}>
                        <card.icon className={`h-5 w-5 text-${card.color}-600`} />
                      </div>
                    </div>
                    {card.change && (
                      <div className="flex items-center mt-4 text-sm">
                        <TrendingUp
                          className={`h-4 w-4 ${
                            card.changeType === "positive" ? "text-emerald-500" : "text-red-500"
                          } mr-1`}
                        />
                        <span
                          className={`${
                            card.changeType === "positive" ? "text-emerald-500" : "text-red-500"
                          } font-medium`}
                        >
                          {card.change}
                        </span>
                        <span className="text-gray-500 mr-2">من الشهر الماضي</span>
                      </div>
                    )}
                    {card.subtitle && <div className="flex items-center mt-4 text-sm">{card.subtitle}</div>}
                    {card.progress && (
                      <div className="mt-4">
                        <Progress value={progressValue} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* التبويبات */}
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8 animate-in fade-in duration-500"
          >
            <TabsList className="mb-6 bg-white p-1 border rounded-lg">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                نظرة عامة
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                فرص التمويل
              </TabsTrigger>
              <TabsTrigger
                value="advisor"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                المستشار الذكي
              </TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="mb-6 border-none shadow-md">
                        <CardHeader>
                          <CardTitle>التدفق النقدي</CardTitle>
                          <CardDescription>تحليل الإيرادات والمصروفات للأشهر الستة الماضية</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md border border-dashed">
                            <div className="text-center">
                              <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-500">رسم بياني للتدفق النقدي</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" className="hover:bg-emerald-50 hover:text-emerald-600">
                            <Download className="h-4 w-4 mr-2" />
                            تصدير البيانات
                          </Button>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            عرض التفاصيل
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="border-none shadow-md">
                        <CardHeader>
                          <CardTitle>المصروفات حسب الفئة</CardTitle>
                          <CardDescription>توزيع المصروفات على الفئات المختلفة</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md border border-dashed">
                            <div className="text-center">
                              <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-500">رسم بياني دائري للمصروفات</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <Card className="mb-6 border-none shadow-md">
                        <CardHeader>
                          <CardTitle>المهام القادمة</CardTitle>
                          <CardDescription>المهام المالية التي تحتاج إلى إكمالها</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-emerald-500 mr-3 mt-0.5"></div>
                              <div>
                                <p className="font-medium">إكمال خطة العمل المالية</p>
                                <p className="text-sm text-gray-500">مطلوب للتقديم على القرض</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-emerald-500 mr-3 mt-0.5"></div>
                              <div>
                                <p className="font-medium">تحديث توقعات الإيرادات</p>
                                <p className="text-sm text-gray-500">للربع القادم</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 mr-3 mt-0.5"></div>
                              <div>
                                <p className="font-medium">مراجعة المصروفات الثابتة</p>
                                <p className="text-sm text-gray-500">تحديد فرص خفض التكاليف</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full hover:bg-emerald-50 hover:text-emerald-600">
                            <Plus className="h-4 w-4 mr-2" />
                            إضافة مهمة جديدة
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="border-none shadow-md">
                        <CardHeader>
                          <CardTitle>نصائح مالية</CardTitle>
                          <CardDescription>توصيات مخصصة لتحسين أداء مشروعك</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-all">
                              <div className="flex items-center mb-2">
                                <Lightbulb className="h-5 w-5 text-blue-500 mr-2" />
                                <p className="font-medium">فرصة لخفض التكاليف</p>
                              </div>
                              <p className="text-sm text-gray-600">
                                يمكنك توفير 15% من تكاليف التشغيل بمراجعة عقود الموردين الحاليين.
                              </p>
                            </div>
                            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 hover:shadow-md transition-all">
                              <div className="flex items-center mb-2">
                                <Lightbulb className="h-5 w-5 text-emerald-500 mr-2" />
                                <p className="font-medium">فرصة لزيادة الإيرادات</p>
                              </div>
                              <p className="text-sm text-gray-600">
                                إضافة خدمة جديدة قد تزيد إيراداتك بنسبة 20% بناءً على تحليل السوق.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="funding">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle>قرض مشاريع صغيرة</CardTitle>
                          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">مناسب لك</Badge>
                        </div>
                        <CardDescription>بنك مسقط</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">قيمة القرض</span>
                            <span className="font-medium">حتى 25,000 ر.ع</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">معدل الفائدة</span>
                            <span className="font-medium">5% سنوياً</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">مدة السداد</span>
                            <span className="font-medium">حتى 5 سنوات</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">نسبة التوافق</span>
                            <span className="font-medium text-emerald-600">85%</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          تقديم طلب
                          <ArrowUpRight className="h-4 w-4 mr-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <CardTitle>صندوق الاستثمار العماني</CardTitle>
                        <CardDescription>صندوق رأس المال الاستثماري</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">قيمة الاستثمار</span>
                            <span className="font-medium">50,000 - 200,000 ر.ع</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">نسبة الملكية</span>
                            <span className="font-medium">15% - 30%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">مدة الاستثمار</span>
                            <span className="font-medium">3-7 سنوات</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">نسبة التوافق</span>
                            <span className="font-medium text-yellow-600">65%</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          تقديم طلب
                          <ArrowUpRight className="h-4 w-4 mr-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <CardTitle>منصة التمويل الجماعي</CardTitle>
                        <CardDescription>تمويل من المجتمع</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">الحد الأقصى</span>
                            <span className="font-medium">حتى 10,000 ر.ع</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">مدة الحملة</span>
                            <span className="font-medium">30-60 يوم</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">رسوم المنصة</span>
                            <span className="font-medium">5% من المبلغ المجمع</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">نسبة التوافق</span>
                            <span className="font-medium text-emerald-600">90%</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          إنشاء حملة
                          <ArrowUpRight className="h-4 w-4 mr-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="advisor">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>المستشار المالي الذكي</CardTitle>
                      <CardDescription>احصل على نصائح مالية مخصصة لمشروعك</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 mb-4 border border-gray-100">
                        <div className="flex gap-3 mb-3">
                          <Avatar className="border-2 border-emerald-200">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                              AI
                            </AvatarFallback>
                          </Avatar>
                          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <p>
                              مرحباً عمر! بناءً على تحليل بياناتك المالية، لدي بعض التوصيات لتحسين التدفق النقدي لمشروعك:
                            </p>
                            <ol className="list-decimal mr-5 mt-2 space-y-1">
                              <li>مراجعة سياسة التسعير الحالية - هناك فرصة لزيادة الأسعار بنسبة 10-15%</li>
                              <li>تقليل فترة السداد للعملاء من 30 يوم إلى 15 يوم</li>
                              <li>التفاوض مع الموردين لتمديد فترة السداد</li>
                            </ol>
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <div className="bg-emerald-50 p-3 rounded-lg shadow-sm border border-emerald-100">
                            <p>شكراً على النصائح! هل يمكنك تقديم المزيد من التفاصيل حول كيفية تحسين التسعير؟</p>
                          </div>
                          <Avatar className="border-2 border-emerald-200">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                              عم
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          اقتراحات سريعة
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          تحليل مالي
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          خطة نمو
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <input
                        type="text"
                        placeholder="اكتب سؤالك هنا..."
                        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <Button className="bg-emerald-600 hover:bg-emerald-700">إرسال</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </main>

      {/* تأثيرات CSS للرسوم المتحركة */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-in {
          animation-duration: 300ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .fade-in {
          animation-name: fadeIn;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
