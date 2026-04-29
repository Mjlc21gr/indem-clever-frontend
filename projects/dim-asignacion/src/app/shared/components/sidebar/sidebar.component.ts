import { Component, input, output, inject, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanelMenu } from 'primeng/panelmenu';
import { ScrollPanel } from 'primeng/scrollpanel';
import { Tooltip } from 'primeng/tooltip';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';
import { Divider } from 'primeng/divider';
import { MenuItem } from 'primeng/api';
import { SIDEBAR_MENU } from '../../data/sidebar-menu.data';
import { SidebarMenuItem } from '../../models/sidebar-menu.model';

/** Collapsed item with group context for visual separators. */
interface CollapsedItem {
  label: string;
  icon: string;
  routerLink: string;
  isFirstInGroup: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenu, ScrollPanel, Tooltip, Button, Image, RouterLink, Divider],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private router = inject(Router);

  /** Whether the sidebar is collapsed to icon-only mode. */
  collapsed = input(false);

  /** Emits when a menu item is selected (used to close mobile sidebar). */
  readonly itemSelected = output<void>();

  /** Binds the collapsed class directly to the host element. */
  @HostBinding('class.sidebar-collapsed')
  get isCollapsed(): boolean {
    return this.collapsed();
  }

  /** PrimeNG PanelMenu items for expanded mode. */
  readonly menuItems: MenuItem[] = SIDEBAR_MENU.map((group) => ({
    label: group.label,
    icon: group.icon,
    items: group.items.map((item) => ({
      label: item.label,
      icon: item.icon,
      command: () => {
        this.router.navigate([item.routerLink]);
        this.itemSelected.emit();
      },
    })),
  }));

  /**
   * All individual items for collapsed mode, deduplicated by routerLink.
   * Includes a flag to mark the first item of each group for visual spacing.
   */
  readonly collapsedItems: CollapsedItem[] = this.buildCollapsedItems();

  /** Builds a deduplicated flat list of all menu items with group separators. */
  private buildCollapsedItems(): CollapsedItem[] {
    const seen = new Set<string>();
    const items: CollapsedItem[] = [];

    for (const group of SIDEBAR_MENU) {
      let isFirst = true;
      for (const item of group.items) {
        if (seen.has(item.routerLink)) {
          continue;
        }
        seen.add(item.routerLink);
        items.push({
          label: item.label,
          icon: item.icon,
          routerLink: item.routerLink,
          isFirstInGroup: isFirst,
        });
        isFirst = false;
      }
    }

    return items;
  }
}
