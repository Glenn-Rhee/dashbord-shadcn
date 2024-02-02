import { LogOut, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cookies } from "@/lib/Cookies";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  function logOut() {
    cookies.remove("qwpt");
    router.push("/auth/login");
  }
  return (
    <div className="mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-fit w-fit">
            <Avatar>
              <AvatarImage src="/img/prof.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="my-3">
            <button className="flex justify-center items-center">
              <Moon className="mr-2 h-4 w-4" />
              <span>Apperance</span>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={logOut}
              className="flex justify-center items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
