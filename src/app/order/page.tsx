"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { dataOrders } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Orders } from "@/types/data/main";
import { ColumnDef } from "@tanstack/react-table";

export default function OrderPage() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={dataOrders} />
    </div>
  );
}

const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "order",
    header: "Status",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
          "bg-red-200": row.getValue("status") === "Pending",
          "bg-green-200": row.getValue("status") === "Processing",
          "bg-orange-200": row.getValue("status") === "Completed",
        })}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];
