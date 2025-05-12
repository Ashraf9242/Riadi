"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FundingOpportunitiesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
    <div className="container mx-auto px-4 py-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
          فرص التمويل
        </h1>
        <p className="text-gray-500">اكتشف فرص التمويل المناسبة لمشروعك</p>
      </motion.header>

      <div className="flex flex-col md:flex-row gap-6">
        {/* الفلاتر الجانبية */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-64 space-y-6"
        >
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">الفلاتر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label className="text-sm font-medium block mb-2">نوع التمويل</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="loan" className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="loan" className="text-sm">
                      قروض
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="investment"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="investment" className="text-sm">
                      استثمار
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="grant"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="grant" className="text-sm">
                      منح
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="crowdfunding"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="crowdfunding" className="text-sm">
                      تمويل جماعي
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">قيمة التمويل</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="amount1"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="amount1" className="text-sm">
                      أقل من 5,000 ر.ع
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="amount2"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="amount2" className="text-sm">
                      5,000 - 25,000 ر.ع
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="amount3"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="amount3" className="text-sm">
                      25,000 - 100,000 ر.ع
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="amount4"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="amount4" className="text-sm">
                      أكثر من 100,000 ر.ع
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">قطاع المشروع</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="tech" className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="tech" className="text-sm">
                      تكنولوجيا
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="food" className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="food" className="text-sm">
                      أغذية ومشروبات
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="retail"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="retail" className="text-sm">
                      تجارة تجزئة
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="services"
                      className="ml-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="services" className="text-sm">
                      خدمات
                    </label>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors">تطبيق الفلاتر</Button>
            </CardContent>
          </Card>
        </motion.aside>

        {/* المحتوى الرئيسي */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1"
        >
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="ابحث عن فرص التمويل..."
                className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>فلترة</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>ترتيب</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="animate-in fade-in duration-500">
            <TabsList className="mb-6 bg-white p-1 border rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                الكل
              </TabsTrigger>
              <TabsTrigger
                value="recommended"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                موصى بها
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                جديدة
              </TabsTrigger>
              <TabsTrigger
                value="closing"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                تنتهي قريباً
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
                <motion.div variants={item}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>برنامج تمويل المشاريع الصغيرة والمتوسطة</CardTitle>
                          <CardDescription>بنك التنمية العماني</CardDescription>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">موصى به</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">نوع التمويل</p>
                          <p className="font-medium">قرض ميسر</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">قيمة التمويل</p>
                          <p className="font-medium">5,000 - 100,000 ر.ع</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">معدل الفائدة</p>
                          <p className="font-medium">3% سنوياً</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        برنامج مخصص لدعم المشاريع الصغيرة والمتوسطة في مختلف القطاعات، مع تركيز خاص على المشاريع التي
                        تساهم في التنويع الاقتصادي وتوفير فرص عمل للشباب العماني.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-gray-500">ينتهي التقديم: 30 يونيو 2024</div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 transition-colors">
                        عرض التفاصيل
                        <ArrowUpRight className="h-4 w-4 mr-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={item} className="mt-6">
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>صندوق الاستثمار في التكنولوجيا</CardTitle>
                          <CardDescription>شركة مسقط للاستثمار</CardDescription>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">جديد</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">نوع التمويل</p>
                          <p className="font-medium">استثمار رأس مال</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">قيمة الاستثمار</p>
                          <p className="font-medium">50,000 - 500,000 ر.ع</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">نسبة الملكية</p>
                          <p className="font-medium">10% - 30%</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        صندوق استثماري يركز على الشركات الناشئة في مجال التكنولوجيا والابتكار، ويقدم بالإضافة إلى
                        التمويل دعماً استشارياً وفرصاً للتوسع في أسواق المنطقة.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-gray-500">مفتوح للتقديم على مدار العام</div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 transition-colors">
                        عرض التفاصيل
                        <ArrowUpRight className="h-4 w-4 mr-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={item} className="mt-6">
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>منصة التمويل الجماعي "ادعم"</CardTitle>
                          <CardDescription>تمويل من المجتمع</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">نوع التمويل</p>
                          <p className="font-medium">تمويل جماعي</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">الحد الأقصى</p>
                          <p className="font-medium">حتى 15,000 ر.ع</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">مدة الحملة</p>
                          <p className="font-medium">30-60 يوم</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        منصة تمويل جماعي تتيح لرواد الأعمال عرض مشاريعهم وجمع التمويل من المجتمع. مناسبة للمشاريع
                        الإبداعية والاجتماعية والمنتجات المبتكرة.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-gray-500">يمكن التقديم في أي وقت</div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 transition-colors">
                        عرض التفاصيل
                        <ArrowUpRight className="h-4 w-4 mr-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* تأثيرات CSS للرسوم المتحركة */}
      <style jsx global>{`
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
