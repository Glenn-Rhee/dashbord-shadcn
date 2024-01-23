import BarChart from "@/components/page/home/BarChart";
import Card from "@/components/page/home/Card";
import PageTitle from "@/components/PageTitle";
import CardContent from "@/components/content/CardContent";
import { cardData, userSalesData } from "@/lib/data";
import SalesCard from "../components/page/home/SalesCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Dashbord" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, i) => (
          <Card
            label={card.label}
            amount={card.amount}
            description={card.description}
            icon={card.icon}
            key={i}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent>
          <p>Recent Sales</p>
          <p className="text-sm text-gray-400">You made 265 sales this month</p>
          {userSalesData.map((user, i) => (
            <SalesCard
              name={user.name}
              email={user.email}
              saleAmount={user.saleAmount}
              key={i}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
