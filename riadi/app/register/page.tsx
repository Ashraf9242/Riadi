"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Briefcase, Eye, EyeOff, Lock, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "free"

  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [projectType, setProjectType] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // محاكاة عملية التسجيل
    setTimeout(() => {
      setIsLoading(false)
      // في التطبيق الحقيقي، سيتم توجيه المستخدم إلى لوحة التحكم بعد إنشاء الحساب
      window.location.href = "/onboarding"
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Briefcase className="h-8 w-8 text-emerald-600" />
            <span className="text-3xl font-bold text-emerald-600">ريادي</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">إنشاء حساب جديد</h2>
          <p className="mt-2 text-gray-600">
            {plan === "free" && "ابدأ رحلتك الريادية مع الخطة المجانية"}
            {plan === "pro" && "انضم إلى الخطة الاحترافية واستفد من جميع المميزات"}
            {plan === "enterprise" && "أنشئ حساباً للحصول على عرض مخصص للشركات"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخل كلمة المرور"
                      className="pr-10 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">نوع المشروع</Label>
                  <Select value={projectType} onValueChange={setProjectType} required>
                    <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                      <SelectValue placeholder="اختر نوع مشروعك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">تكنولوجيا</SelectItem>
                      <SelectItem value="food">أغذية ومشروبات</SelectItem>
                      <SelectItem value="retail">تجارة تجزئة</SelectItem>
                      <SelectItem value="services">خدمات</SelectItem>
                      <SelectItem value="manufacturing">تصنيع</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                    required
                  />
                  <label htmlFor="terms" className="mr-2 text-sm text-gray-600">
                    أوافق على{" "}
                    <Link href="/terms" className="text-emerald-600 hover:text-emerald-500">
                      شروط الاستخدام
                    </Link>{" "}
                    و{" "}
                    <Link href="/privacy" className="text-emerald-600 hover:text-emerald-500">
                      سياسة الخصوصية
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                  disabled={isLoading || !agreeTerms}
                >
                  {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-6">
              <p className="text-gray-600 text-sm">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  تسجيل الدخول
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
