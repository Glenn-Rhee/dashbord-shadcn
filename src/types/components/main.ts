import { LucideIcon } from "lucide-react";

export interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
  className?: string;
}

export interface PageTitleProps {
  title: string;
  className?: string;
}

export interface CardProps {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
}

export interface SalesCardProps {
  name: string;
  email: string;
  saleAmount: number;
}
