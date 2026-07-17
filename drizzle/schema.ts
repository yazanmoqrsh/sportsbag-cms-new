import {
  mysqlTable,
  mysqlEnum,
  int,
  varchar,
  text,
  decimal,
  timestamp,
  json,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 20 }),
  role: mysqlEnum(["admin", "manager", "staff"]).default("staff"),
  branchId: int(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().onUpdateNow(),
});

export const products = mysqlTable("products", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  price: decimal({ precision: 10, scale: 2 }).notNull(),
  cost: decimal({ precision: 10, scale: 2 }),
  category: varchar({ length: 100 }),
  brand: varchar({ length: 100 }),
  size: varchar({ length: 50 }),
  color: varchar({ length: 50 }),
  stock: int().default(0),
  sku: varchar({ length: 100 }).unique(),
  imageUrl: varchar({ length: 500 }),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().onUpdateNow(),
});

export const orders = mysqlTable("orders", {
  id: int().primaryKey().autoincrement(),
  customerName: varchar({ length: 255 }).notNull(),
  customerPhone: varchar({ length: 20 }).notNull(),
  customerEmail: varchar({ length: 255 }),
  products: json().notNull(),
  totalPrice: decimal({ precision: 10, scale: 2 }).notNull(),
  status: mysqlEnum(["pending", "confirmed", "shipped", "delivered", "cancelled"]).default("pending"),
  branchId: int(),
  notes: text(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().onUpdateNow(),
});

export const branches = mysqlTable("branches", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  city: varchar({ length: 100 }).notNull(),
  address: text(),
  phone: varchar({ length: 20 }),
  manager: varchar({ length: 255 }),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().onUpdateNow(),
});

export const categories = mysqlTable("categories", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  icon: varchar({ length: 500 }),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().onUpdateNow(),
});