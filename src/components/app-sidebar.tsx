"use client";

import * as React from "react";
import { NavProjects } from "@/components/nav-projects";
import { CreatorInformation } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CreatorInformation />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
