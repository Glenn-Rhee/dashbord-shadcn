import BarChart from "@/components/BarChart";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import CardContent from "@/components/content/CardContent";
import { cardData } from "@/lib/data";

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
      </section>
    </div>
  );
}
