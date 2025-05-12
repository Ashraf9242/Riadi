"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, Calendar, Download, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FinancialManagementPage() {
  const [showAddTransaction, setShowAddTransaction] = useState(false)
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
        delayChildren: 0.2,
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
          الإدارة المالية
        </h1>
        <p className="text-gray-500">تتبع وإدارة مصاريف مشروعك والتدفق النقدي</p>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        {[
          {
            title: "الرصيد الحالي",
            value: "5,280 ر.ع",
            icon: ArrowUp,
            color: "emerald",
          },
          {
            title: "الإيرادات (هذا الشهر)",
            value: "3,450 ر.ع",
            icon: ArrowUp,
            color: "emerald",
          },
          {
            title: "المصروفات (هذا الشهر)",
            value: "1,850 ر.ع",
            icon: ArrowDown,
            color: "red",
          },
          {
            title: "صافي الربح (هذا الشهر)",
            value: "1,600 ر.ع",
            icon: ArrowUp,
            color: "blue",
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="mb-6 border-none shadow-md">
            <CardHeader>
              <CardTitle>التدفق النقدي</CardTitle>
              <CardDescription>تحليل الإيرادات والمصروفات للأشهر الستة الماضية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md border border-dashed relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute top-40 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
                    <ArrowUp className="h-8 w-8" />
                  </div>
                  <p className="text-gray-500">رسم بياني للتدفق النقدي</p>
                  <p className="text-sm text-gray-400 mt-2">سيتم عرض بيانات التدفق النقدي هنا</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  تغيير الفترة
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  تصدير
                </Button>
              </div>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-[180px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="عرض" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">أسبوعي</SelectItem>
                  <SelectItem value="monthly">شهري</SelectItem>
                  <SelectItem value="quarterly">ربع سنوي</SelectItem>
                  <SelectItem value="yearly">سنوي</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>المصروفات حسب الفئة</CardTitle>
              <CardDescription>توزيع المصروفات على الفئات المختلفة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md border border-dashed relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-10 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
                </div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
                    <ArrowDown className="h-8 w-8" />
                  </div>
                  <p className="text-gray-500">رسم بياني دائري للمصروفات</p>
                  <p className="text-sm text-gray-400 mt-2">سيتم عرض توزيع المصروفات هنا</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">المعاملات الأخيرة</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAddTransaction(!showAddTransaction)}
                className="hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                إضافة
              </Button>
            </CardHeader>
            <CardContent>
              {showAddTransaction && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 p-3 border rounded-md bg-gradient-to-br from-gray-50 to-white shadow-sm"
                >
                  <h4 className="font-medium mb-2">إضافة معاملة جديدة</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium block mb-1">النوع</label>
                      <Select defaultValue="expense">
                        <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="اختر النوع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="income">إيراد</SelectItem>
                          <SelectItem value="expense">مصروف</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">المبلغ (ر.ع)</label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">الفئة</label>
                      <Select defaultValue="">
                        <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="اختر الفئة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">مبيعات</SelectItem>
                          <SelectItem value="services">خدمات</SelectItem>
                          <SelectItem value="rent">إيجار</SelectItem>
                          <SelectItem value="salaries">رواتب</SelectItem>
                          <SelectItem value="marketing">تسويق</SelectItem>
                          <SelectItem value="utilities">مرافق</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">التاريخ</label>
                      <Input type="date" className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">ملاحظات</label>
                      <Input
                        placeholder="ملاحظات إضافية..."
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-colors">حفظ</Button>
                      <Button
                        variant="outline"
                        className="flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-colors"
                        onClick={() => setShowAddTransaction(false)}
                      >
                        إلغاء
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="space-y-4">
                {[
                  {
                    title: "رواتب الموظفين",
                    date: "15 مايو 2024",
                    amount: "-850 ر.ع",
                    type: "expense",
                  },
                  {
                    title: "مبيعات المنتجات",
                    date: "12 مايو 2024",
                    amount: "+1,200 ر.ع",
                    type: "income",
                  },
                  {
                    title: "إيجار المكتب",
                    date: "1 مايو 2024",
                    amount: "-450 ر.ع",
                    type: "expense",
                  },
                  {
                    title: "خدمات استشارية",
                    date: "28 أبريل 2024",
                    amount: "+750 ر.ع",
                    type: "income",
                  },
                  {
                    title: "مصاريف تسويقية",
                    date: "25 أبريل 2024",
                    amount: "-320 ر.ع",
                    type: "expense",
                  },
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b hover:bg-gray-50 transition-colors rounded-md p-2"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full ${
                          transaction.type === "expense" ? "bg-red-100" : "bg-emerald-100"
                        } flex items-center justify-center mr-3`}
                      >
                        {transaction.type === "expense" ? (
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        ) : (
                          <ArrowUp className="h-4 w-4 text-emerald-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.title}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <p
                      className={`font-medium ${transaction.type === "expense" ? "text-red-600" : "text-emerald-600"}`}
                    >
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                عرض جميع المعاملات
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>سجل المعاملات</CardTitle>
                <CardDescription>جميع المعاملات المالية لمشروعك</CardDescription>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="بحث..."
                    className="pr-10 w-full md:w-auto border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
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
                    <Download className="h-4 w-4" />
                    <span>تصدير</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="animate-in fade-in duration-500">
              <TabsList className="mb-6 bg-white p-1 border rounded-lg">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                >
                  الكل
                </TabsTrigger>
                <TabsTrigger
                  value="income"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                >
                  الإيرادات
                </TabsTrigger>
                <TabsTrigger
                  value="expenses"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                >
                  المصروفات
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-right py-3 px-4 font-medium">التاريخ</th>
                        <th className="text-right py-3 px-4 font-medium">الوصف</th>
                        <th className="text-right py-3 px-4 font-medium">الفئة</th>
                        <th className="text-right py-3 px-4 font-medium">المبلغ</th>
                        <th className="text-right py-3 px-4 font-medium">الرصيد</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm">15 مايو 2024</td>
                        <td className="py-3 px-4">رواتب الموظفين</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">رواتب</span>
                        </td>
                        <td className="py-3 px-4 text-red-600">-850 ر.ع</td>
                        <td className="py-3 px-4">4,430 ر.ع</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm">12 مايو 2024</td>
                        <td className="py-3 px-4">مبيعات المنتجات</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">مبيعات</span>
                        </td>
                        <td className="py-3 px-4 text-emerald-600">+1,200 ر.ع</td>
                        <td className="py-3 px-4">5,280 ر.ع</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm">1 مايو 2024</td>
                        <td className="py-3 px-4">إيجار المكتب</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">إيجار</span>
                        </td>
                        <td className="py-3 px-4 text-red-600">-450 ر.ع</td>
                        <td className="py-3 px-4">4,080 ر.ع</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm">28 أبريل 2024</td>
                        <td className="py-3 px-4">خدمات استشارية</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">خدمات</span>
                        </td>
                        <td className="py-3 px-4 text-emerald-600">+750 ر.ع</td>
                        <td className="py-3 px-4">4,530 ر.ع</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm">25 أبريل 2024</td>
                        <td className="py-3 px-4">مصاريف تسويقية</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">تسويق</span>
                        </td>
                        <td className="py-3 px-4 text-red-600">-320 ر.ع</td>
                        <td className="py-3 px-4">3,780 ر.ع</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

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
        .animation-delay-3000 {
          animation-delay: 3s;
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
