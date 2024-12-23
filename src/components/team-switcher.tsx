"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeSwitch } from "./theme-switch";

export function CreatorInformation() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
      
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            N
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Nabin Achar</span>
            <span className="truncate text-xs">@thechotoprogrammer</span>
          </div>

          <ThemeSwitch/>
         
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
