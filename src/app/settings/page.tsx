import PageTitle from "@/components/PageTitle";
import TableSettings from "@/components/page/settiings/TableSettings";
import { settingsData } from "@/lib/data";

export default function SettingsPage() {
  return (
    <div className="flex flex-col w-full gap-5">
      <PageTitle title="Settings" />
      <TableSettings data={settingsData}/>
    </div>
  );
}
