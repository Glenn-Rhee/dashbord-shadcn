"use client";
import { useState } from "react";
import { Nav } from "./ui/Nav";

import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Profile from "./Profile";

export default function SidebarNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathName = usePathname();
  function handleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      {!pathName.includes("auth") ? (
        <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
          <div className="flex justify-center">
            <Profile />
          </div>
          <div className="absolute right-[-20px] top-7 hidden md:block">
            <Button
              variant={"ghost"}
              className="rounded-full p-2 shadow-md"
              onClick={handleCollapsed}
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashbord",
                icon: LayoutDashboard,
                variant: "default",
                href: "/",
              },
              {
                title: "User",
                icon: UsersRound,
                variant: "ghost",
                href: "/users",
              },
              {
                title: "Orders",
                icon: ShoppingCart,
                variant: "ghost",
                href: "/order",
              },
              {
                title: "Settings",
                icon: Settings,
                variant: "ghost",
                href: "/settings",
              },
            ]}
            className="hidden md:block"
          />
          <Nav
            className="block md:hidden"
            isCollapsed={true}
            links={[
              {
                title: "Dashbord",
                icon: LayoutDashboard,
                variant: "default",
                href: "/",
              },
              {
                title: "User",
                icon: UsersRound,
                variant: "ghost",
                href: "/users",
              },
              {
                title: "Orders",
                icon: ShoppingCart,
                variant: "ghost",
                href: "/order",
              },
              {
                title: "Settings",
                icon: Settings,
                variant: "ghost",
                href: "/settings",
              },
            ]}
          />
        </div>
      ) : null}
    </>
  );
}
