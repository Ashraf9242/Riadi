"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Briefcase, CreditCard, DollarSign, LineChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* الهيدر */}
      <header className="bg-white border-b sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">ريادي</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              المميزات
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">
              كيف يعمل
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">
              قصص نجاح
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-emerald-600 transition-colors">
              لوحة التحكم
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="hover:border-emerald-600 hover:text-emerald-600 transition-all">
                تسجيل الدخول
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700 transition-colors">إنشاء حساب</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <main className="flex-1">
        {/* قسم الترحيب */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
                ابدأ مشروعك بثقة مالية
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              منصة "ريادي" تساعدك على إدارة الجانب المالي لمشروعك، والوصول إلى فرص التمويل المناسبة، وتطوير أفكارك مع
              مجتمع من الخبراء ورواد الأعمال
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="text-lg bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all transform hover:scale-105"
              >
                شاهد العرض التوضيحي
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12"
            >
              <div className="relative mx-auto w-full max-w-4xl h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <LineChart className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">لوحة تحكم تفاعلية</h3>
                    <p className="text-gray-600 max-w-md mx-auto mt-2">
                      تحليلات مالية متقدمة وتوصيات ذكية لتنمية مشروعك
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* قسم المميزات */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">كيف يساعدك "ريادي"</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                منصة متكاملة تقدم حلولاً مالية ذكية لرواد الأعمال، مصممة خصيصاً لتلبية احتياجات المشاريع الناشئة في عُمان
              </p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={item}>
                <Card className="h-full border-none bg-gradient-to-br from-emerald-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <CreditCard className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">فرص التمويل</h3>
                    <p className="text-gray-600">
                      اكتشف فرص التمويل المناسبة لمشروعك، سواء كانت قروضاً، استثماراً، أو تمويلاً جماعياً، مع توصيات مخصصة
                      لاحتياجاتك وطبيعة مشروعك
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>تحليل توافق المشروع مع جهات التمويل</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>مقارنة شروط وفوائد خيارات التمويل</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>إرشادات لتحسين فرص الحصول على التمويل</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full border-none bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <BarChart3 className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">إدارة مالية ذكية</h3>
                    <p className="text-gray-600">
                      تتبع مصاريف مشروعك والتدفق النقدي بواجهة مرئية سهلة، مع تحليلات وتوقعات تساعدك على اتخاذ قرارات
                      مالية أفضل لضمان استدامة مشروعك
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>لوحات تحكم تفاعلية للبيانات المالية</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>تنبيهات ذكية للمصروفات غير العادية</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>توقعات مالية مستقبلية بناءً على البيانات</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full border-none bg-gradient-to-br from-purple-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">مجتمع داعم</h3>
                    <p className="text-gray-600">
                      اعرض أفكارك وتلقى ملاحظات من مجتمع من الخبراء ورواد الأعمال، وتواصل مع مستثمرين ومستشارين لتطوير
                      مشروعك وتوسيع شبكة علاقاتك
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        <span>منتدى لطرح الأسئلة وتبادل الخبرات</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        <span>جلسات استشارية مع خبراء متخصصين</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        <span>فعاليات افتراضية للتواصل وبناء العلاقات</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* قسم كيف يعمل */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">كيف تبدأ مع "ريادي"</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                خطوات بسيطة تفصلك عن الاستفادة من منصة متكاملة لإدارة الجانب المالي لمشروعك والحصول على الدعم اللازم
              </p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
              {[
                {
                  step: 1,
                  title: "سجل حساباً",
                  description: "أنشئ حساباً مجانياً وأكمل ملفك الشخصي ومعلومات مشروعك",
                  delay: 0,
                },
                {
                  step: 2,
                  title: "أضف بياناتك المالية",
                  description: "أدخل معلومات مشروعك المالية أو استورد بياناتك من برامج المحاسبة",
                  delay: 0.2,
                },
                {
                  step: 3,
                  title: "احصل على توصيات",
                  description: "استلم توصيات مخصصة لفرص التمويل وتحسين الأداء المالي لمشروعك",
                  delay: 0.4,
                },
                {
                  step: 4,
                  title: "نمِّ مشروعك",
                  description: "تواصل مع المستثمرين والمستشارين وطور مشروعك مع دعم المجتمع",
                  delay: 0.6,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="text-center relative z-10"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white shadow-lg relative">
                    {item.step}
                    <div className="absolute -inset-2 rounded-full border-4 border-dashed border-emerald-200 animate-spin-slow"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الشهادات */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">قصص نجاح</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                تعرف على تجارب رواد الأعمال الذين استفادوا من منصة "ريادي" في تطوير مشاريعهم وتحقيق أهدافهم المالية
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "سارة الرحبي",
                  project: "مؤسسة مشروع 'نكهات عُمانية'",
                  testimonial:
                    "ساعدتني منصة ريادي في الحصول على تمويل لمشروعي الصغير، وقدمت لي نصائح قيمة حول إدارة التدفق النقدي. الآن مشروعي ينمو بشكل مستدام وأستطيع التركيز على تطوير منتجاتي بدلاً من القلق بشأن الأمور المالية.",
                  delay: 0,
                },
                {
                  name: "أحمد البلوشي",
                  project: "مؤسس تطبيق 'دليلك'",
                  testimonial:
                    "بفضل التحليلات المالية في ريادي، تمكنت من تحديد نقاط الضعف في نموذج أعمالي وتحسينها. كما ساعدني المجتمع في تطوير فكرتي بشكل كبير من خلال التعليقات والاقتراحات القيمة. حصلت على استثمار بقيمة 50,000 ر.ع بعد 3 أشهر فقط!",
                  delay: 0.2,
                },
                {
                  name: "فاطمة الحارثي",
                  project: "صاحبة مشروع 'حرفتي'",
                  testimonial:
                    "كنت أجد صعوبة في فهم الجوانب المالية لمشروعي، لكن ريادي جعل الأمر سهلاً مع الرسوم البيانية والتقارير المبسطة. الآن أنا أكثر ثقة في قراراتي المالية وتمكنت من توسيع مشروعي ليشمل 3 فروع جديدة في مسقط وصلالة.",
                  delay: 0.4,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  <Card className="h-full bg-white border border-gray-100 hover:border-emerald-200 transition-all shadow-md hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                            {item.name.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mr-4">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.project}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="absolute top-0 right-0 w-10 h-10 text-emerald-100 -mt-3 -mr-3"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 relative z-10 leading-relaxed">{item.testimonial}</p>
                      </div>
                      <div className="mt-4 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الإحصائيات */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "1,200+", label: "رائد أعمال", icon: Users },
                { number: "150+", label: "مشروع ممول", icon: CreditCard },
                { number: "25M+", label: "ريال عماني", icon: DollarSign },
                { number: "92%", label: "نسبة الرضا", icon: BarChart3 },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* قسم الدعوة للعمل */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ رحلتك الريادية اليوم</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                انضم إلى مجتمع "ريادي" واحصل على الدعم المالي والإرشاد الذي تحتاجه لتحويل فكرتك إلى مشروع ناجح
              </p>
              <Button
                size="lg"
                className="text-lg bg-white text-emerald-600 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                سجل الآن مجاناً
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* الفوتر */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6 text-emerald-400" />
                <span className="text-2xl font-bold text-emerald-400">ريادي</span>
              </div>
              <p className="text-gray-400">منصة متكاملة لتمكين رواد الأعمال من خلال حلول مالية ذكية وسهلة الاستخدام</p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    المميزات
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    كيف يعمل
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    قصص نجاح
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">الموارد</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@riadi.om
                </li>
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +968 1234 5678
                </li>
                <li className="flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  مسقط، سلطنة عمان
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">اشترك في النشرة البريدية</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="px-3 py-2 bg-gray-800 text-white rounded-r-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1"
                  />
                  <Button className="rounded-l-none bg-emerald-600 hover:bg-emerald-700">اشترك</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 ريادي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

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
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
