import React from 'react'

export default function Products() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#1a3a52]">إدارة المنتجات</h1>
        <button className="px-6 py-3 bg-[#1a3a52] text-white rounded-xl font-semibold hover:bg-[#2d7a4a]">
          + إضافة منتج جديد
        </button>
      </div>
      
      <div className="bg-white rounded-2xl border overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <input 
            type="text" 
            placeholder="ابحث عن منتج..." 
            className="px-4 py-2 border rounded-xl w-80 focus:outline-none focus:border-[#1a3a52]"
          />
          <div className="text-sm text-gray-500">221 منتج • 6 فئات</div>
        </div>
        
        <div className="p-6">
          <p className="text-center text-gray-500 py-12">
            سيتم تحميل قائمة المنتجات من قاعدة البيانات (المنتجات الـ 221 جاهزة للنقل)
          </p>
        </div>
      </div>
    </div>
  )
}