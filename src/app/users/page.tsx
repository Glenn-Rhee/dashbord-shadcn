import AlertForm from "@/components/AlertForm";
import PageTitle from "@/components/PageTitle";
import TableUsers from "@/components/page/users/TableUsers";
import { getUser } from "@/lib/fetch/user";
import { ResponseApiUser } from "@/types/auth";

export default async function UsersPage() {
  const response: ResponseApiUser = await getUser();
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Users" />
      {/* <TableUsers data={data} /> */}
      {response.status !== "success" ? (
        <AlertForm errorCode={response.statusCode} message={response.message} />
      ) : (
        <>
          {response.data ? (
            <TableUsers data={response.data} />
          ) : (
            <AlertForm
              errorCode={response.statusCode}
              message={response.message}
            />
          )}
        </>
      )}
    </div>
  );
}
