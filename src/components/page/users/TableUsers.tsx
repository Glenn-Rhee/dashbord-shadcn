"use client";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { TableUserProps } from "@/types/components/main";
import { Payment } from "@/types/data/main";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Swal from "sweetalert2";

export default function TableUsers(props: TableUserProps) {
  const { data } = props;
  return <DataTable columns={columns} data={data} />;
}

function handleUnfunction() {
  Swal.fire({
    title: "Error",
    text: "Oops, This button is not yet working",
    icon: "error",
    confirmButtonText: "OK",
  });
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
          <Button variant={"default"} onClick={handleUnfunction} size={"sm"}>
            Edit
          </Button>
          <Button variant={"destructive"} onClick={handleUnfunction}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
