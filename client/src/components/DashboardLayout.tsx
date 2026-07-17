import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Settings,
  LogOut 
} from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation()
  
  const navItems = [
    { path: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { path: '/products', label: 'المنتجات', icon: Package },
    { path: '/orders', label: 'الطلبات', icon: ShoppingCart },
    { path: '/settings', label: 'الإعدادات', icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-100" dir="rtl">
      <div className="w-72 bg-[#1a3a52] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">حقيبة الرياضة</h1>
          <p className="text-sm text-white/60 mt-1">نظام إدارة المتجر</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-xl">مرحباً، يزن مقرش</h2>
            <p className="text-sm text-gray-500">مدير النظام • جميع الفروع</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              متصل
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}