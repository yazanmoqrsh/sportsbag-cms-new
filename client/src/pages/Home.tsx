import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8" dir="rtl">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#1a3a52] mb-6">حقيبة الرياضة</h1>
        <p className="text-xl text-gray-600 mb-8">نظام إدارة المتجر المتكامل - SportsBag CMS</p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            to="/dashboard" 
            className="px-8 py-4 bg-[#1a3a52] text-white rounded-xl font-semibold hover:bg-[#2d7a4a] transition-all"
          >
            لوحة التحكم
          </Link>
          <a 
            href="#features" 
            className="px-8 py-4 border-2 border-[#1a3a52] text-[#1a3a52] rounded-xl font-semibold hover:bg-[#1a3a52] hover:text-white transition-all"
          >
            تعرف على الميزات
          </a>
        </div>

        <div id="features" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">إدارة المنتجات</h3>
            <p className="text-gray-600">221 منتج جاهز للنقل مع فئات ومخزون كامل</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">إدارة الطلبات</h3>
            <p className="text-gray-600">تتبع الطلبات عبر الفروع في إدلب، حلب، دمشق وجرمانا</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-bold text-lg mb-2">نظام متعدد الفروع</h3>
            <p className="text-gray-600">صلاحيات ومخزون منفصل لكل فرع مع تقارير موحدة</p>
          </div>
        </div>
      </div>
    </div>
  )
}