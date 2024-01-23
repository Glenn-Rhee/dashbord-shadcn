"use client";
import { DataTable } from "@/components/DataTable";
import { cn } from "@/lib/utils";
import { TableOrderProps } from "@/types/components/main";
import { Orders } from "@/types/data/main";
import { ColumnDef } from "@tanstack/react-table";

export default function TableOrder(props: TableOrderProps) {
  const { data } = props;
  return <DataTable columns={columns} data={data} />;
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
