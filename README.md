# 🏪 حقيبة الرياضة - SportsBag CMS (النسخة الجديدة)

نظام إدارة متجر متكامل لـ "حقيبة الرياضة" - متخصص في أحذية كرة القدم والتجهيزات الرياضية.

## المميزات
- إدارة 221 منتج مع فئات ومخزون
- إدارة الطلبات والعملاء عبر 4 فروع (إدلب، حلب، دمشق، جرمانا)
- نظام صلاحيات متقدم (Admin / Manager / Staff)
- تصميم موحد بألوان Navy Blue + Gold + Green
- دعم كامل للغة العربية (RTL)
- جاهز للنشر على Netlify أو Manus أو أي خادم

## التشغيل المحلي

```bash
pnpm install
cp .env.example .env
pnpm db:push
pnpm dev
```

الواجهة: http://localhost:5173
الخادم: http://localhost:3000

## التصميم
- Primary: #1a3a52 (Navy)
- Secondary: #d4af37 (Gold)
- Accent: #2d7a4a (Green)

تم البناء والصيانة: يوليو 2026