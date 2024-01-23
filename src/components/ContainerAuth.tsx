import { ContainerAuthProps } from "@/types/components/main";
import CardContent from "./content/CardContent";

export default function ContainerAuth(props: ContainerAuthProps) {
  const { children } = props;
  return (
    <div className="flex w-full justify-center items-center p-4">
      <CardContent className="w-3/4 md:w-[60%] lg:w-[40%] shadow-2xl">
        {children}
      </CardContent>
    </div>
  );
}
