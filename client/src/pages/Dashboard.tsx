import React from 'react'
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: 'إجمالي المنتجات', value: '221', icon: Package, change: '+12' },
    { label: 'الطلبات النشطة', value: '48', icon: ShoppingCart, change: '+5' },
    { label: 'العملاء', value: '1,284', icon: Users, change: '+34' },
    { label: 'إيرادات الشهر', value: '₺124,500', icon: TrendingUp, change: '+18%' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1a3a52] mb-8">لوحة التحكم الرئيسية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-6 border shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-4xl font-bold text-[#1a3a52] mt-2">{stat.value}</p>
                </div>
                <div className="p-3 bg-[#1a3a52]/5 rounded-xl">
                  <Icon className="w-6 h-6 text-[#1a3a52]" />
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600 font-medium">
                {stat.change} هذا الشهر
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-2xl border p-6">
        <h3 className="font-semibold text-lg mb-4">النشاط الأخير</h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center py-3 border-b">
            <span>طلب جديد #4821 - فرع حلب</span>
            <span className="text-gray-500">منذ 5 دقائق</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <span>تم تحديث مخزون 12 منتج</span>
            <span className="text-gray-500">منذ ساعة</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span>عميل جديد سجل من دمشق</span>
            <span className="text-gray-500">منذ 3 ساعات</span>
          </div>
        </div>
      </div>
    </div>
  )
}