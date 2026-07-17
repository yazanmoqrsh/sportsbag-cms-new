import React from 'react'

export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1a3a52] mb-8">الإعدادات</h1>
      
      <div className="max-w-2xl bg-white rounded-2xl border p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">اسم المتجر</label>
          <input type="text" defaultValue="حقيبة الرياضة" className="w-full px-4 py-3 border rounded-xl" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">البريد الإلكتروني للدعم</label>
          <input type="email" defaultValue="support@sportsbag.sy" className="w-full px-4 py-3 border rounded-xl" />
        </div>
        <button className="px-8 py-3 bg-[#1a3a52] text-white rounded-xl font-semibold">
          حفظ التغييرات
        </button>
      </div>
    </div>
  )
}