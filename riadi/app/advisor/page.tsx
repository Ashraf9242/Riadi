"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, BarChart3, CreditCard, Lightbulb, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdvisorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "مرحباً! أنا المستشار المالي الذكي. كيف يمكنني مساعدتك اليوم في تطوير مشروعك؟",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // إضافة رسالة المستخدم
    setMessages([...messages, { role: "user", content: newMessage }])
    setNewMessage("")

    // محاكاة الكتابة
    setIsTyping(true)

    // محاكاة رد المساعد (في تطبيق حقيقي سيتم استدعاء API للذكاء الاصطناعي)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "شكراً على سؤالك! بناءً على بيانات مشروعك، يمكنني تقديم بعض التوصيات المخصصة لتحسين الأداء المالي وتطوير استراتيجية النمو. هل تريد التركيز على زيادة الإيرادات، أم خفض التكاليف، أم تحسين التدفق النقدي؟",
        },
      ])
    }, 1500)
  }

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
    <div className="container mx-auto px-4 py-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
          المستشار المالي الذكي
        </h1>
        <p className="text-gray-500">الحصول على نصائح مالية مخصصة وتوجيهات لتطوير مشروعك</p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="h-[600px] flex flex-col border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>المستشار المالي الذكي</CardTitle>
                  <CardDescription>مدعوم بالذكاء الاصطناعي لتقديم توصيات مخصصة لمشروعك</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-6">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                    >
                      {message.role === "assistant" && (
                        <Avatar className="border-2 border-emerald-200">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            AI
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`p-3 rounded-lg max-w-[80%] ${
                          message.role === "assistant"
                            ? "bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                            : "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-900 shadow-sm"
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <Avatar className="border-2 border-emerald-200">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            أنت
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                      <Avatar className="border-2 border-emerald-200">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div className="p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce animation-delay-200"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce animation-delay-400"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </CardContent>
            <CardFooter className="border-t p-4 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-emerald-600 hover:bg-emerald-700 transition-colors">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">إرسال</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={container}
        >
          <motion.div variants={item}>
            <Card className="mb-6 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>اقتراحات سريعة</CardTitle>
                <CardDescription>أسئلة شائعة يمكنك طرحها على المستشار</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  onClick={() => {
                    setNewMessage("كيف يمكنني تحسين التدفق النقدي لمشروعي؟")
                    setTimeout(handleSendMessage, 100)
                  }}
                >
                  كيف يمكنني تحسين التدفق النقدي لمشروعي؟
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  onClick={() => {
                    setNewMessage("ما هي أفضل فرص التمويل المناسبة لمشروعي؟")
                    setTimeout(handleSendMessage, 100)
                  }}
                >
                  ما هي أفضل فرص التمويل المناسبة لمشروعي؟
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  onClick={() => {
                    setNewMessage("كيف أضع استراتيجية تسعير مناسبة لمنتجاتي؟")
                    setTimeout(handleSendMessage, 100)
                  }}
                >
                  كيف أضع استراتيجية تسعير مناسبة لمنتجاتي؟
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  onClick={() => {
                    setNewMessage("ما هي النسب المالية التي يجب أن أراقبها في مشروعي؟")
                    setTimeout(handleSendMessage, 100)
                  }}
                >
                  ما هي النسب المالية التي يجب أن أراقبها في مشروعي؟
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>أدوات مساعدة</CardTitle>
                <CardDescription>أدوات تحليلية لمساعدتك في اتخاذ القرارات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors hover:border-emerald-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">تحليل الجدوى المالية</h3>
                  </div>
                  <p className="text-sm text-gray-600">أداة لتحليل جدوى مشروعك وتوقع الأرباح والخسائر</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-blue-600">
                    استخدم الأداة
                    <ArrowRight className="h-4 w-4 mr-1" />
                  </Button>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors hover:border-emerald-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <CreditCard className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-medium">مقارنة خيارات التمويل</h3>
                  </div>
                  <p className="text-sm text-gray-600">أداة لمقارنة خيارات التمويل المختلفة واختيار الأنسب لمشروعك</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-emerald-600">
                    استخدم الأداة
                    <ArrowRight className="h-4 w-4 mr-1" />
                  </Button>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors hover:border-emerald-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-medium">مولد خطة العمل</h3>
                  </div>
                  <p className="text-sm text-gray-600">أداة لإنشاء خطة عمل احترافية لمشروعك بخطوات بسيطة</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-purple-600">
                    استخدم الأداة
                    <ArrowRight className="h-4 w-4 mr-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* تأثيرات CSS للرسوم المتحركة */}
      <style jsx global>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  )
}
