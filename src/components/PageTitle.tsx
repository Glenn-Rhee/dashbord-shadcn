import { cn } from "@/lib/utils";
import { PageTitleProps } from "@/types/components/main";

export default function PageTitle(props: PageTitleProps) {
  const { title, className } = props;
  return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
}
