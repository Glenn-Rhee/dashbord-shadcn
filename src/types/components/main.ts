import { ColumnDef } from "@tanstack/react-table";
import { LucideIcon } from "lucide-react";
import React from "react";
import { Orders, Payment, Settings } from "../data/main";

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

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface TableUserProps {
  data: Payment[];
}

export interface TableOrderProps {
  data: Orders[];
}

export interface TableSettingsProps {
  data: Settings[];
}
