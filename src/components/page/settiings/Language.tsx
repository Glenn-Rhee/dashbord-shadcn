import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Language() {
  const [lang, setLang] = useState("english");
  const value =
    lang.split("")[0].toUpperCase() + lang.split("").slice(1).join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"default"}>{value}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
          <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="indonesia">
            Indonesia
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
