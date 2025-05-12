"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AlertCircle, ArrowUpRight, Calendar, CreditCard, Download, Edit2, Gem } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SubscriptionsPage() {
  const [activeTab, setActiveTab] = useState("current")
  const [showCancelDialog, setShowCancelDialog] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
          إدارة الاشتراك
        </h1>
        <p className="text-gray-500">عرض وإدارة تفاصيل اشتراكك في منصة ريادي</p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>تفاصيل الاشتراك</CardTitle>
                  <CardDescription>معلومات اشتراكك الحالي</CardDescription>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">نشط</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-lg border border-emerald-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Gem className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">الخطة الاحترافية</h3>
                      <p className="text-gray-600">اشتراك سنوي</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">تاريخ بدء الاشتراك</span>
                      <span>15 مايو 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">تاريخ التجديد التالي</span>
                      <span>15 مايو 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">المبلغ</span>
                      <span>96 ر.ع / سنوياً</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">طريقة الدفع</span>
                      <span className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-1 text-gray-500" /> بطاقة تنتهي بـ ****4242
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                        >
                          <Edit2 className="h-4 w-4 ml-2" />
                          تغيير الخطة
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>تغيير خطة الاشتراك</DialogTitle>
                          <DialogDescription>اختر الخطة التي تناسب احتياجات مشروعك</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                          <div className="border rounded-lg p-4 hover:border-emerald-200 cursor-pointer transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">الخطة المجانية</h3>
                              <Badge variant="outline">مجاني</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">للمبتدئين</p>
                            <p className="text-sm text-gray-600">ميزات أساسية محدودة مع 3 استشارات شهرياً.</p>
                          </div>
                          <div className="border-2 border-emerald-500 rounded-lg p-4 bg-emerald-50 cursor-pointer transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">الخطة الاحترافية</h3>
                              <Badge className="bg-emerald-100 text-emerald-800">الحالية</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">96 ر.ع / سنوياً</p>
                            <p className="text-sm text-gray-600">جميع الميزات المتقدمة مع استشارات غير محدودة.</p>
                          </div>
                          <div className="border rounded-lg p-4 hover:border-emerald-200 cursor-pointer transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">الخطة المؤسسية</h3>
                              <Badge variant="outline">ترقية</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">240 ر.ع / سنوياً</p>
                            <p className="text-sm text-gray-600">للشركات مع إدارة حسابات متعددة وتقارير متقدمة.</p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">إلغاء</Button>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">تأكيد التغيير</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                        >
                          <CreditCard className="h-4 w-4 ml-2" />
                          تحديث طريقة الدفع
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>تحديث طريقة الدفع</DialogTitle>
                          <DialogDescription>أدخل تفاصيل بطاقة الدفع الجديدة</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <label htmlFor="card-number" className="text-sm font-medium">
                              رقم البطاقة
                            </label>
                            <input
                              id="card-number"
                              placeholder="0000 0000 0000 0000"
                              className="w-full px-3 py-2 border rounded-md"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="expiry" className="text-sm font-medium">
                                تاريخ الانتهاء
                              </label>
                              <input id="expiry" placeholder="MM/YY" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="cvv" className="text-sm font-medium">
                                رمز الأمان
                              </label>
                              <input id="cvv" placeholder="123" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">إلغاء</Button>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">حفظ التغييرات</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-colors"
                        >
                          <AlertCircle className="h-4 w-4 ml-2" />
                          إلغاء الاشتراك
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>هل أنت متأكد من إلغاء الاشتراك؟</AlertDialogTitle>
                          <AlertDialogDescription>
                            سيتم إلغاء اشتراكك في نهاية فترة الفوترة الحالية (15 مايو 2024). ستفقد الوصول إلى جميع
                            الميزات المتقدمة بعد هذا التاريخ.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>تراجع</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 hover:bg-red-700">تأكيد الإلغاء</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">الميزات المتاحة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">تحليلات مالية متقدمة</h4>
                      <p className="text-sm text-gray-600">
                        تحليلات وتقارير مفصلة لمساعدتك في فهم الوضع المالي لمشروعك واتخاذ قرارات أفضل.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">توصيات مخصصة لفرص التمويل</h4>
                      <p className="text-sm text-gray-600">
                        اكتشف فرص التمويل المناسبة لمشروعك بناءً على بياناتك المالية واحتياجاتك.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">استشارات غير محدودة</h4>
                      <p className="text-sm text-gray-600">
                        تواصل مع المستشار الذكي بلا حدود للحصول على إجابات لأسئلتك ونصائح لتطوير مشروعك.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">تخزين البيانات لمدة سنة</h4>
                      <p className="text-sm text-gray-600">
                        احتفظ بسجل كامل لبياناتك المالية ومعاملاتك لمدة سنة كاملة للرجوع إليها عند الحاجة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <Card className="border-none shadow-md sticky top-8">
            <CardHeader className="pb-2">
              <CardTitle>سجل الفواتير</CardTitle>
              <CardDescription>تاريخ المدفوعات والفواتير</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4 bg-white p-1 border rounded-lg">
                  <TabsTrigger
                    value="current"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                  >
                    الحالية
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                  >
                    السابقة
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="current">
                  <div className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">الفاتورة الحالية</h3>
                        <p className="text-xs text-gray-500">15 مايو 2023</p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">مدفوع</Badge>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">الخطة الاحترافية (سنوي)</span>
                      <span>96 ر.ع</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>الإجمالي</span>
                      <span>96 ر.ع</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    >
                      <Download className="h-4 w-4 ml-2" />
                      تحميل الفاتورة
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">الفاتورة القادمة</h3>
                        <p className="text-xs text-gray-500">15 مايو 2024</p>
                      </div>
                      <Badge variant="outline">قادم</Badge>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">الخطة الاحترافية (سنوي)</span>
                      <span>96 ر.ع</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>الإجمالي</span>
                      <span>96 ر.ع</span>
                    </div>
                    <div className="flex items-center mt-4 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 ml-2 text-gray-400" />
                      سيتم الخصم تلقائياً في 15 مايو 2024
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="history">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">INV-2023-001</h3>
                          <p className="text-xs text-gray-500">15 مايو 2023</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">مدفوع</Badge>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">الخطة الاحترافية (سنوي)</span>
                        <span>96 ر.ع</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                      >
                        <Download className="h-4 w-4 ml-2" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Link href="/pricing" className="w-full">
                <Button
                  variant="outline"
                  className="w-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                >
                  مقارنة الخطط
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
