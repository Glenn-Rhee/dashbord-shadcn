import { cn } from "@/lib/utils";
import { CardProps } from "@/types/components/main";
import React from "react";

export default function Card(props: CardProps) {
  const { label, amount, description } = props;
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{label}</p>

        {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{amount}</h2>
        <p className="text-xs text-gray-500">{description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full gap-3 flex-col rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
