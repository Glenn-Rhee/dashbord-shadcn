import PageTitle from "@/components/PageTitle";
import TableUsers from "@/components/page/users/TableUsers";
import { data } from "@/lib/data";

export default function UsersPage() {
  const dataUser = data;

  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Users" />
      <TableUsers data={dataUser} />
    </div>
  );
}
