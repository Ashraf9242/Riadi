"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Download, ImageIcon, Lightbulb, Paperclip, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "مرحباً! أنا المساعد الذكي من ريادي. كيف يمكنني مساعدتك اليوم في تطوير مشروعك؟",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatMode, setChatMode] = useState("financial")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // التمرير التلقائي إلى آخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
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
          المساعد الذكي
        </h1>
        <p className="text-gray-500">تحدث مع المساعد الذكي للحصول على إجابات لأسئلتك ونصائح لتطوير مشروعك</p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 order-2 lg:order-1"
        >
          <Card className="border-none shadow-md sticky top-8">
            <CardHeader className="pb-2">
              <CardTitle>الأدوات المساعدة</CardTitle>
              <CardDescription>اختر نوع المحادثة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={chatMode} onValueChange={setChatMode}>
                <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="اختر نوع المحادثة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial">المستشار المالي</SelectItem>
                  <SelectItem value="marketing">مستشار التسويق</SelectItem>
                  <SelectItem value="business">مستشار الأعمال</SelectItem>
                  <SelectItem value="legal">المستشار القانوني</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-3">
                <h3 className="font-medium text-sm">اقتراحات سريعة</h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
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
                    size="sm"
                    className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    onClick={() => {
                      setNewMessage("ما هي أفضل استراتيجيات التسويق لمشروع ناشئ؟")
                      setTimeout(handleSendMessage, 100)
                    }}
                  >
                    ما هي أفضل استراتيجيات التسويق لمشروع ناشئ؟
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-right hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    onClick={() => {
                      setNewMessage("كيف أعد خطة عمل احترافية؟")
                      setTimeout(handleSendMessage, 100)
                    }}
                  >
                    كيف أعد خطة عمل احترافية؟
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-sm">محادثات سابقة</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-right hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-gray-500" />
                      <span className="truncate">استراتيجية التسعير</span>
                    </div>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-right hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-gray-500" />
                      <span className="truncate">خطة التسويق الرقمي</span>
                    </div>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-right hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-gray-500" />
                      <span className="truncate">تحليل المنافسين</span>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm">الاستخدام الشهري</h3>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">الخطة الاحترافية</Badge>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[35%]"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">35% من الاستخدام الشهري (غير محدود)</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-3 order-1 lg:order-2"
        >
          <Card className="border-none shadow-md h-[700px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b flex-shrink-0">
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>المساعد الذكي</CardTitle>
                  <CardDescription>
                    {chatMode === "financial" && "المستشار المالي"}
                    {chatMode === "marketing" && "مستشار التسويق"}
                    {chatMode === "business" && "مستشار الأعمال"}
                    {chatMode === "legal" && "المستشار القانوني"}
                  </CardDescription>
                </div>
                <div className="mr-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  >
                    <Download className="h-4 w-4 ml-2" />
                    تصدير المحادثة
                  </Button>
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
                        <Avatar className="mt-1 border-2 border-emerald-200">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            <Bot className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`p-4 rounded-lg max-w-[80%] ${
                          message.role === "assistant"
                            ? "bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                            : "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-900 shadow-sm"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <Avatar className="mt-1 border-2 border-emerald-200">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                      <Avatar className="mt-1 border-2 border-emerald-200">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                          <Bot className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce animation-delay-200"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce animation-delay-400"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </motion.div>
            </CardContent>
            <CardFooter className="border-t p-4 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col w-full space-y-2">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="اكتب رسالتك هنا..."
                  className="min-h-[80px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                    >
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-emerald-600 hover:bg-emerald-700 transition-colors"
                  >
                    <Send className="h-4 w-4 ml-2" />
                    إرسال
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
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
