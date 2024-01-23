import PageTitle from "@/components/PageTitle";
import TableOrder from "@/components/page/order/TableOrder";
import { dataOrders } from "@/lib/data";

export default function OrderPage() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Orders" />
      <TableOrder data={dataOrders} />
    </div>
  );
}
