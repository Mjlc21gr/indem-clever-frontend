/** Represents a navigation group in the sidebar menu. */
export interface SidebarMenuGroup {
  label: string;
  icon: string;
  /** Tooltip shown in collapsed mode for this group. */
  collapsedTooltip: string;
  items: SidebarMenuItem[];
}

/** Represents a single navigation item within a sidebar group. */
export interface SidebarMenuItem {
  label: string;
  icon: string;
  routerLink: string;
}
