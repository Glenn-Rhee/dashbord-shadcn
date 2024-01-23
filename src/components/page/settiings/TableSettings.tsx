"use client";
import { DataTable } from "@/components/DataTable";
import { TableSettingsProps } from "@/types/components/main";
import { Settings } from "@/types/data/main";
import { ColumnDef } from "@tanstack/react-table";
import Apperance from "./Apperance";
import Language from "./Language";

export default function TableSettings(props: TableSettingsProps) {
  const { data } = props;
  return <DataTable columns={columns} data={data} />;
}

const columns: ColumnDef<Settings>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div>
        {row.getValue("category") === "Theme" ? (
          <Apperance />
        ) : row.getValue("category") === "Language" ? (
          <Language />
        ) : (
          row.getValue("value")
        )}
      </div>
    ),
  },
];
