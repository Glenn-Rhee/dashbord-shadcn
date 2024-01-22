import { CardProps } from "@/types/components/main";
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
