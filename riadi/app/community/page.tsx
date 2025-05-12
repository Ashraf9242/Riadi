"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, MessageSquare, Search, ThumbsUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
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
          مجتمع رواد الأعمال
        </h1>
        <p className="text-gray-500">تواصل مع رواد الأعمال والمستثمرين والمستشارين</p>
      </motion.header>

      <div className="flex flex-col md:flex-row gap-6">
        {/* الشريط الجانبي */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-64 space-y-6"
        >
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">مجتمعك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 font-medium"
              >
                <Users className="h-5 w-5" />
                <span>جميع المنشورات</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Badge className="h-5 w-5" />
                <span>رواد الأعمال</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span>المستثمرون</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span>المستشارون</span>
              </Link>
            </CardContent>
            <CardHeader className="pb-3 pt-0">
              <CardTitle className="text-lg">المجموعات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>التكنولوجيا والابتكار</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>التجارة الإلكترونية</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>الصناعات الغذائية</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span>الحرف اليدوية</span>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">المستشارون الموصى بهم</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    خم
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">خالد المنذري</p>
                  <p className="text-xs text-gray-500">مستشار مالي</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    سع
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">سارة العامري</p>
                  <p className="text-xs text-gray-500">مستشارة تسويق</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    مب
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">محمد البلوشي</p>
                  <p className="text-xs text-gray-500">مستشار تقني</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                عرض المزيد
              </Button>
            </CardFooter>
          </Card>
        </motion.aside>

        {/* المحتوى الرئيسي */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1"
        >
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="ابحث في المجتمع..."
                className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>

          <Card className="mb-6 border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    أنت
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input
                    placeholder="شارك فكرة أو اطرح سؤالاً..."
                    className="mb-3 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <div className="flex gap-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 transition-colors">نشر</Button>
                    <Button
                      variant="outline"
                      className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    >
                      إضافة صورة
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="animate-in fade-in duration-500">
            <TabsList className="mb-6 bg-white p-1 border rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                الكل
              </TabsTrigger>
              <TabsTrigger
                value="questions"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                أسئلة
              </TabsTrigger>
              <TabsTrigger
                value="ideas"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                أفكار
              </TabsTrigger>
              <TabsTrigger
                value="success"
                className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
              >
                قصص نجاح
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
                <motion.div variants={item}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="border-2 border-emerald-200">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                              فر
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">فاطمة الراشدي</p>
                            <p className="text-xs text-gray-500">رائدة أعمال - مشروع "حرفتي"</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">منذ 2 ساعة</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        أواجه تحدياً في تسعير منتجاتي اليدوية. كيف يمكنني تحديد السعر المناسب الذي يغطي التكاليف ويحقق
                        ربحاً معقولاً دون أن يكون مرتفعاً جداً للعملاء؟
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span>15</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>8 تعليقات</span>
                        </button>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <div className="space-y-4 w-full">
                        <div className="flex gap-3">
                          <Avatar className="w-8 h-8 border-2 border-emerald-100">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs">
                              خم
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex justify-between mb-1">
                              <p className="font-medium text-sm">خالد المنذري</p>
                              <p className="text-xs text-gray-500">منذ ساعة</p>
                            </div>
                            <p className="text-sm">
                              يمكنك استخدام معادلة بسيطة: تكلفة المواد + تكلفة العمل (ساعات العمل × سعر الساعة) +
                              المصاريف الثابتة + هامش ربح (30-50%). جربي هذه الطريقة وعدلي الأسعار بناءً على ردود فعل
                              السوق.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Avatar className="w-8 h-8 border-2 border-emerald-100">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs">
                              أنت
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Input
                              placeholder="أضف تعليقاً..."
                              className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={item} className="mt-6">
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="border-2 border-emerald-200">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                              أب
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">أحمد البلوشي</p>
                            <p className="text-xs text-gray-500">رائد أعمال - تطبيق "دليلك"</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">منذ يوم</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        سعيد جداً بمشاركة قصة نجاح مشروعي! بعد 6 أشهر من العمل المتواصل، حصلنا على تمويل بقيمة 50,000 ر.ع
                        من صندوق الاستثمار العماني. أشكر منصة "ريادي" على المساعدة في تحسين خطة العمل والتواصل مع
                        المستثمرين المناسبين.
                      </p>
                      <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg mb-4 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                        </div>
                        <div className="h-40 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-md border border-dashed relative z-10">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg text-white">
                              <Users className="h-8 w-8" />
                            </div>
                            <p className="text-gray-500">صورة لفريق العمل</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>32</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>12 تعليقات</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* تأثيرات CSS للرسوم المتحركة */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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
