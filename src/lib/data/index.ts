import { CardProps, SalesCardProps } from "@/types/components/main";
import { Activity, CreditCard, DollarSign, LayoutDashboard, Settings, ShoppingCart, Users, UsersRound } from "lucide-react";

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
