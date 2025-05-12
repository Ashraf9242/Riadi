"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Check, CreditCard, DollarSign, Lock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "pro"
  const billingCycle = searchParams.get("billing") || "annual"

  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // تفاصيل الخطط
  const planDetails = {
    free: {
      name: "الخطة المجانية",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "إدارة مالية أساسية",
        "عرض فرص التمويل المتاحة",
        "الوصول للمجتمع",
        "3 استشارات شهرياً مع المستشار الذكي",
      ],
    },
    pro: {
      name: "الخطة الاحترافية",
      monthlyPrice: 10,
      annualPrice: 96, // 20% خصم
      features: [
        "جميع مميزات الخطة المجانية",
        "تحليلات مالية متقدمة",
        "توصيات مخصصة لفرص التمويل",
        "استشارات غير محدودة مع المستشار الذكي",
        "تخزين البيانات لمدة سنة كاملة",
      ],
    },
    enterprise: {
      name: "الخطة المؤسسية",
      monthlyPrice: 25,
      annualPrice: 240, // 20% خصم
      features: [
        "جميع مميزات الخطة الاحترافية",
        "إدارة حسابات متعددة (حتى 5 مستخدمين)",
        "تقارير مالية متقدمة",
        "تكامل مع برامج المحاسبة",
        "تخزين البيانات غير محدود",
      ],
    },
  }

  const selectedPlan = planDetails[plan as keyof typeof planDetails]
  const price = billingCycle === "annual" ? selectedPlan.annualPrice : selectedPlan.monthlyPrice

  // تنسيق رقم البطاقة
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // تنسيق تاريخ الانتهاء
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value)
    setCardNumber(formattedValue)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value)
    setExpiryDate(formattedValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // محاكاة عملية الدفع
    setTimeout(() => {
      setIsProcessing(false)
      router.push(`/checkout/success?plan=${plan}&billing=${billingCycle}`)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
            إتمام عملية الاشتراك
          </h1>
          <p className="text-gray-600">أنت على بعد خطوة واحدة من الاستفادة من مميزات منصة ريادي</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>معلومات الدفع</CardTitle>
                <CardDescription>اختر طريقة الدفع وأدخل التفاصيل المطلوبة</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <RadioGroup
                      defaultValue={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem
                          value="credit-card"
                          id="credit-card"
                          className="peer sr-only"
                          aria-label="بطاقة ائتمان"
                        />
                        <Label
                          htmlFor="credit-card"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-emerald-200 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50 [&:has([data-state=checked])]:border-emerald-500 [&:has([data-state=checked])]:bg-emerald-50 cursor-pointer"
                        >
                          <CreditCard className="mb-2 h-6 w-6 text-emerald-600" />
                          <div className="text-center">
                            <p className="font-medium">بطاقة ائتمان</p>
                            <p className="text-xs text-gray-500">Visa / Mastercard</p>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="bank-transfer"
                          id="bank-transfer"
                          className="peer sr-only"
                          aria-label="تحويل بنكي"
                        />
                        <Label
                          htmlFor="bank-transfer"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-emerald-200 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50 [&:has([data-state=checked])]:border-emerald-500 [&:has([data-state=checked])]:bg-emerald-50 cursor-pointer"
                        >
                          <DollarSign className="mb-2 h-6 w-6 text-emerald-600" />
                          <div className="text-center">
                            <p className="font-medium">تحويل بنكي</p>
                            <p className="text-xs text-gray-500">تحويل مباشر</p>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="apple-pay"
                          id="apple-pay"
                          className="peer sr-only"
                          aria-label="Apple Pay"
                        />
                        <Label
                          htmlFor="apple-pay"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-emerald-200 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50 [&:has([data-state=checked])]:border-emerald-500 [&:has([data-state=checked])]:bg-emerald-50 cursor-pointer"
                        >
                          <svg
                            className="mb-2 h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.41667 12.875C6.41667 9.75 9.08333 9.16667 9.08333 9.16667C9.08333 9.16667 8.625 7.08333 10.25 5.91667C11.875 4.75 13.5 5.08333 13.5 5.08333C13.5 5.08333 14.5833 3.58333 17 4.25C19.4167 4.91667 19.5833 7.08333 19.5833 7.08333C19.5833 7.08333 22.4167 7.58333 22.4167 10.5C22.4167 13.4167 19.5833 13.4167 19.5833 13.4167"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 13.5833C17.5 13.5833 17.5 16.0833 17.5 17.4167C17.5 18.75 16.5833 19.5833 15.4167 19.5833C14.25 19.5833 13.75 18.75 13.75 18.0833C13.75 17.4167 14.25 16.5833 15.4167 16.5833C16.5833 16.5833 17.5 17.4167 17.5 18.0833"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.75 13.5833C8.75 13.5833 8.75 16.0833 8.75 17.4167C8.75 18.75 7.83333 19.5833 6.66667 19.5833C5.5 19.5833 5 18.75 5 18.0833C5 17.4167 5.5 16.5833 6.66667 16.5833C7.83333 16.5833 8.75 17.4167 8.75 18.0833"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.125 13.5833C13.125 13.5833 13.125 16.0833 13.125 17.4167C13.125 18.75 12.2083 19.5833 11.0417 19.5833C9.875 19.5833 9.375 18.75 9.375 18.0833C9.375 17.4167 9.875 16.5833 11.0417 16.5833C12.2083 16.5833 13.125 17.4167 13.125 18.0833"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="text-center">
                            <p className="font-medium">Apple Pay</p>
                            <p className="text-xs text-gray-500">دفع سريع</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">رقم البطاقة</Label>
                          <div className="relative">
                            <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                              id="card-number"
                              placeholder="0000 0000 0000 0000"
                              className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              maxLength={19}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="card-name">الاسم على البطاقة</Label>
                          <Input
                            id="card-name"
                            placeholder="الاسم كما هو مكتوب على البطاقة"
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry-date">تاريخ الانتهاء</Label>
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input
                                id="expiry-date"
                                placeholder="MM/YY"
                                className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                maxLength={5}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">رمز الأمان (CVV)</Label>
                            <div className="relative">
                              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input
                                id="cvv"
                                placeholder="123"
                                className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                                maxLength={4}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank-transfer" && (
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                        <h3 className="font-medium mb-2">تفاصيل التحويل البنكي</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          يرجى تحويل المبلغ المطلوب إلى الحساب البنكي التالي، وسيتم تفعيل اشتراكك بعد التأكد من التحويل.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">اسم البنك:</span>
                            <span className="font-medium">بنك مسقط</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">اسم الحساب:</span>
                            <span className="font-medium">شركة ريادي للتقنية</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">رقم الحساب:</span>
                            <span className="font-medium">0123456789</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">رقم IBAN:</span>
                            <span className="font-medium">OM12 BMOI 0123 4567 8900 1234</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "apple-pay" && (
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4 text-center">
                        <h3 className="font-medium mb-2">الدفع باستخدام Apple Pay</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          انقر على زر "إتمام الدفع" أدناه وسيتم توجيهك إلى صفحة Apple Pay لإتمام عملية الدفع.
                        </p>
                        <div className="bg-black text-white py-2 px-4 rounded-lg inline-flex items-center gap-2">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.41667 12.875C6.41667 9.75 9.08333 9.16667 9.08333 9.16667C9.08333 9.16667 8.625 7.08333 10.25 5.91667C11.875 4.75 13.5 5.08333 13.5 5.08333C13.5 5.08333 14.5833 3.58333 17 4.25C19.4167 4.91667 19.5833 7.08333 19.5833 7.08333C19.5833 7.08333 22.4167 7.58333 22.4167 10.5C22.4167 13.4167 19.5833 13.4167 19.5833 13.4167"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 13.5833C17.5 13.5833 17.5 16.0833 17.5 17.4167C17.5 18.75 16.5833 19.5833 15.4167 19.5833C14.25 19.5833 13.75 18.75 13.75 18.0833C13.75 17.4167 14.25 16.5833 15.4167 16.5833C16.5833 16.5833 17.5 17.4167 17.5 18.0833"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.75 13.5833C8.75 13.5833 8.75 16.0833 8.75 17.4167C8.75 18.75 7.83333 19.5833 6.66667 19.5833C5.5 19.5833 5 18.75 5 18.0833C5 17.4167 5.5 16.5833 6.66667 16.5833C7.83333 16.5833 8.75 17.4167 8.75 18.0833"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.125 13.5833C13.125 13.5833 13.125 16.0833 13.125 17.4167C13.125 18.75 12.2083 19.5833 11.0417 19.5833C9.875 19.5833 9.375 18.75 9.375 18.0833C9.375 17.4167 9.875 16.5833 11.0417 16.5833C12.2083 16.5833 13.125 17.4167 13.125 18.0833"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Pay</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center pt-4">
                      <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                      <p className="text-sm text-gray-600">جميع المعاملات آمنة ومشفرة. معلومات بطاقتك محمية.</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "جاري معالجة الدفع..." : "إتمام الدفع"}
                      {!isProcessing && <ArrowRight className="mr-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="border-none shadow-lg sticky top-8">
              <CardHeader className="pb-2">
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{selectedPlan.name}</h3>
                      {plan === "pro" && (
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">الأكثر شيوعاً</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {billingCycle === "annual" ? "اشتراك سنوي" : "اشتراك شهري"}
                    </p>
                    <ul className="space-y-2">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="bg-emerald-100 p-1 rounded-full mt-0.5">
                            <Check className="h-3 w-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">سعر الاشتراك</span>
                        <span>
                          {price} ر.ع{" "}
                          <span className="text-gray-500">/ {billingCycle === "annual" ? "سنوياً" : "شهرياً"}</span>
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <div className="flex justify-between text-sm">
                          <span className="text-emerald-600">خصم الاشتراك السنوي</span>
                          <span className="text-emerald-600">20%</span>
                        </div>
                      )}
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>الإجمالي</span>
                        <span>
                          {price} ر.ع{" "}
                          <span className="text-gray-500 font-normal">
                            / {billingCycle === "annual" ? "سنوياً" : "شهرياً"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="text-xs text-gray-500">
                  بالضغط على "إتمام الدفع"، أنت توافق على{" "}
                  <a href="/terms" className="text-emerald-600 hover:underline">
                    شروط الاستخدام
                  </a>{" "}
                  و{" "}
                  <a href="/privacy" className="text-emerald-600 hover:underline">
                    سياسة الخصوصية
                  </a>
                  .
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
