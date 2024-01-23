import { CardProps, SalesCardProps } from "@/types/components/main";
import { Orders, Payment, Settings } from "@/types/data/main";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "Rp. 1.500.000",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Total Users",
    amount: "5.000",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active now",
    amount: "2.147",
    description: "+201 since last hour",
    icon: Activity,
  },
];

export const chartData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mei", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export const userSalesData: SalesCardProps[] = [
  {
    name: "Ariel Rizki",
    email: "arielrizki2005@gmail.com",
    saleAmount: 50000,
  },
  {
    name: "Glenn Rhee",
    email: "glennrhee@gmail.com",
    saleAmount: 60000,
  },
  {
    name: "Maggie Rhee",
    email: "maggierhee@gmail.com",
    saleAmount: 70000,
  },
];

export const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "online",
    email: "arielrizki2005@gmail.com",
    username: "Ariel Rizki Muhtamad Bakri",
    action: "",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "offline",
    email: "glennrhee@gmail.com",
    username: "Glenn Rhee",
    action: "",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "offline",
    email: "glennrhee@gmail.com",
    username: "Glenn Rhee",
    action: "",
  },
];

export const dataOrders: Orders[] = [
  {
    id: "8358asyu",
    order: "ORD01",
    status: "Pending",
    lastOrder: "2023-01-23",
    method: "Paypall",
  },
  {
    id: "438acas",
    order: "ORD02",
    status: "Processing",
    lastOrder: "2023-01-23",
    method: "Debit",
  },
  {
    id: "4614coma",
    order: "ORD03",
    status: "Pending",
    lastOrder: "2023-01-23",
    method: "Paypall",
  },
  {
    id: "197sadq",
    order: "ORD04",
    status: "Completed",
    lastOrder: "2023-01-23",
    method: "Cash",
  },
];

export const settingsData: Settings[] = [
  {
    category: "Account",
    value: "Admin",
  },
  {
    category: "Notifications",
    value: "false",
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];
