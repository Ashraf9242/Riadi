"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AtSign, Calendar, Edit2, MapPin, Phone, Save, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  // بيانات المستخدم (في تطبيق حقيقي ستأتي من قاعدة البيانات)
  const [userData, setUserData] = useState({
    name: "عمر المعمري",
    email: "omar@example.com",
    phone: "+968 1234 5678",
    location: "مسقط، عُمان",
    bio: "رائد أعمال في مجال التكنولوجيا، مهتم بتطوير حلول مبتكرة للشركات الصغيرة والمتوسطة.",
    projectName: "تقنية بلس",
    projectType: "تكنولوجيا",
    projectStage: "نمو",
    foundedDate: "2022",
    teamSize: "5-10",
    website: "www.techplus.om",
    plan: "الخطة الاحترافية",
    joinDate: "15 يناير 2023",
  })

  const handleSaveChanges = () => {
    // في تطبيق حقيقي، سيتم حفظ البيانات في قاعدة البيانات
    setIsEditing(false)
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
          الملف الشخصي
        </h1>
        <p className="text-gray-500">إدارة معلومات حسابك ومشروعك</p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="border-none shadow-md sticky top-8">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 border-4 border-emerald-100">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-2xl">
                      عم
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 bg-emerald-600 text-white p-1 rounded-full hover:bg-emerald-700 transition-colors">
                    <Edit2 className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-500 mb-4">{userData.projectName}</p>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-6">{userData.plan}</Badge>

                <div className="w-full space-y-3 text-right">
                  <div className="flex items-center gap-3">
                    <AtSign className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">عضو منذ {userData.joinDate}</span>
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
          className="lg:col-span-2"
        >
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>معلومات الحساب</CardTitle>
                {!isEditing ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                    className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    تعديل
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(false)}
                      className="hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-colors"
                    >
                      <X className="h-4 w-4 mr-2" />
                      إلغاء
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveChanges}
                      className="bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      حفظ
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6 bg-white p-1 border rounded-lg">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                  >
                    المعلومات الشخصية
                  </TabsTrigger>
                  <TabsTrigger
                    value="project"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                  >
                    معلومات المشروع
                  </TabsTrigger>
                  <TabsTrigger
                    value="subscription"
                    className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 rounded-md transition-all"
                  >
                    الاشتراك
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">الاسم الكامل</Label>
                          <Input
                            id="name"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">البريد الإلكتروني</Label>
                          <Input
                            id="email"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">رقم الهاتف</Label>
                          <Input
                            id="phone"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">الموقع</Label>
                          <Input
                            id="location"
                            value={userData.location}
                            onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">نبذة تعريفية</Label>
                        <Textarea
                          id="bio"
                          value={userData.bio}
                          onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                          className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          rows={4}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">الاسم الكامل</h3>
                          <p>{userData.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">البريد الإلكتروني</h3>
                          <p>{userData.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">رقم الهاتف</h3>
                          <p>{userData.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">الموقع</h3>
                          <p>{userData.location}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">نبذة تعريفية</h3>
                        <p>{userData.bio}</p>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="project">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="projectName">اسم المشروع</Label>
                          <Input
                            id="projectName"
                            value={userData.projectName}
                            onChange={(e) => setUserData({ ...userData, projectName: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectType">نوع المشروع</Label>
                          <Input
                            id="projectType"
                            value={userData.projectType}
                            onChange={(e) => setUserData({ ...userData, projectType: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectStage">مرحلة المشروع</Label>
                          <Input
                            id="projectStage"
                            value={userData.projectStage}
                            onChange={(e) => setUserData({ ...userData, projectStage: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="foundedDate">تاريخ التأسيس</Label>
                          <Input
                            id="foundedDate"
                            value={userData.foundedDate}
                            onChange={(e) => setUserData({ ...userData, foundedDate: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="teamSize">حجم الفريق</Label>
                          <Input
                            id="teamSize"
                            value={userData.teamSize}
                            onChange={(e) => setUserData({ ...userData, teamSize: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">الموقع الإلكتروني</Label>
                          <Input
                            id="website"
                            value={userData.website}
                            onChange={(e) => setUserData({ ...userData, website: e.target.value })}
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">اسم المشروع</h3>
                          <p>{userData.projectName}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">نوع المشروع</h3>
                          <p>{userData.projectType}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">مرحلة المشروع</h3>
                          <p>{userData.projectStage}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">تاريخ التأسيس</h3>
                          <p>{userData.foundedDate}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">حجم الفريق</h3>
                          <p>{userData.teamSize}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">الموقع الإلكتروني</h3>
                          <p>{userData.website}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="subscription">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-lg border border-emerald-100 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">الخطة الحالية</h3>
                          <p className="text-gray-600">{userData.plan}</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">نشط</Badge>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">تاريخ بدء الاشتراك</span>
                          <span>15 مايو 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">تاريخ التجديد</span>
                          <span>15 مايو 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">المبلغ</span>
                          <span>96 ر.ع / سنوياً</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
                        >
                          تغيير الخطة
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-colors"
                        >
                          إلغاء الاشتراك
                        </Button>
                      </div>
                      <Link href="/subscriptions" className="w-full mt-4">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors">
                          إدارة الاشتراك
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">سجل الفواتير</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="text-right py-3 px-4 font-medium">التاريخ</th>
                              <th className="text-right py-3 px-4 font-medium">رقم الفاتورة</th>
                              <th className="text-right py-3 px-4 font-medium">المبلغ</th>
                              <th className="text-right py-3 px-4 font-medium">الحالة</th>
                              <th className="text-right py-3 px-4 font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-gray-50 transition-colors">
                              <td className="py-3 px-4">15 مايو 2023</td>
                              <td className="py-3 px-4">INV-2023-001</td>
                              <td className="py-3 px-4">96 ر.ع</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">مدفوع</Badge>
                              </td>
                              <td className="py-3 px-4">
                                <Button variant="link" className="p-0 h-auto text-emerald-600">
                                  تحميل
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
