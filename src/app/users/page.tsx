"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { Payment } from "@/types/data/main";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export default function UsersPage() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <Image
            width={20}
            height={20}
            alt="Avatar"
            src="/img/prof.jpg"
            className="rounded-full"
          />
          <p>{row.getValue("username")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => {
      return (
        <div className="flex gap-3">
          <Button variant={"default"}>Edit</Button>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      );
    },
  },
];
