"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ChevronLeft, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "pro"
  const billingCycle = searchParams.get("billing") || "annual"

  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [transactionDate, setTransactionDate] = useState("")

  useEffect(() => {
    // إنشاء رقم فاتورة عشوائي
    const randomInvoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
    setInvoiceNumber(randomInvoiceNumber)

    // تاريخ المعاملة (اليوم)
    const today = new Date()
    const formattedDate = today.toLocaleDateString("ar-OM", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    setTransactionDate(formattedDate)
  }, [])

  // تفاصيل الخطط
  const planDetails = {
    free: {
      name: "الخطة المجانية",
      monthlyPrice: 0,
      annualPrice: 0,
    },
    pro: {
      name: "الخطة الاحترافية",
      monthlyPrice: 10,
      annualPrice: 96,
    },
    enterprise: {
      name: "الخطة المؤسسية",
      monthlyPrice: 25,
      annualPrice: 240,
    },
  }

  const selectedPlan = planDetails[plan as keyof typeof planDetails]
  const price = billingCycle === "annual" ? selectedPlan.annualPrice : selectedPlan.monthlyPrice
  const nextBillingDate = new Date()
  nextBillingDate.setFullYear(
    billingCycle === "annual" ? nextBillingDate.getFullYear() + 1 : nextBillingDate.getMonth() + 1,
  )

  const formattedNextBillingDate = nextBillingDate.toLocaleDateString("ar-OM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
            تم الدفع بنجاح!
          </h1>
          <p className="text-gray-600">شكراً لاشتراكك في منصة ريادي. تم تفعيل حسابك بنجاح.</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle>تفاصيل الاشتراك</CardTitle>
            <CardDescription>معلومات الفاتورة والاشتراك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{selectedPlan.name}</h3>
                  <span className="font-medium">
                    {price} ر.ع / {billingCycle === "annual" ? "سنوياً" : "شهرياً"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">تاريخ التجديد التالي: {formattedNextBillingDate}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">رقم الفاتورة</h3>
                  <p>{invoiceNumber}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">تاريخ المعاملة</h3>
                  <p>{transactionDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">طريقة الدفع</h3>
                  <p>بطاقة ائتمان (تنتهي بـ ****4242)</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">حالة الدفع</h3>
                  <p className="text-emerald-600 font-medium">تم الدفع</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">المبلغ المدفوع</span>
                  <span className="font-medium">{price} ر.ع</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الضريبة</span>
                  <span>0.00 ر.ع</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>الإجمالي</span>
                  <span>{price} ر.ع</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                variant="outline"
                className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                تحميل الفاتورة
              </Button>
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors">
                  الانتقال إلى لوحة التحكم
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 text-center">
              إذا كان لديك أي استفسار، يرجى{" "}
              <a href="/contact" className="text-emerald-600 hover:underline">
                التواصل مع فريق الدعم
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
