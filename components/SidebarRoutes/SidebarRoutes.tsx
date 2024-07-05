"use client";
import { SidebarItem } from "../SidebarItem";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:px-6 md:py-2">
          <p>GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />
        <div className="p-2 md:px-6 md:py-2">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-2 md:px-6 md:py-2">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-center px-6 py-2">
          <Button variant="outline" className="w-full">
            Upgrade Plan
          </Button>
        </div>
        <Separator />
        <footer className="mt-2 px-3 text-center">
          2024. All rights reserved
        </footer>
      </div>
    </div>
  );
}
