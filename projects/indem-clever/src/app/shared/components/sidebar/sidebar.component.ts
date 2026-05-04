import { Component, input, output, signal, inject, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SIDEBAR_MENU } from '../../data/sidebar-menu.data';

/** Grupo de menú con estado de expansión. */
interface MenuGroup {
  label: string;
  icon: string;
  expanded: boolean;
  items: { label: string; icon: string; routerLink: string }[];
}

/** Item colapsado para modo icon-only. */
interface CollapsedItem {
  label: string;
  icon: string;
  routerLink: string;
  isFirstInGroup: boolean;
}

/**
 * Sidebar — menú lateral de la aplicación.
 * Usa sb-ui-menu + HTML nativo. Sin PrimeNG.
 */
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly router = inject(Router);

  /** Si el sidebar está colapsado (solo iconos). */
  collapsed = input(false);

  /** Emite cuando se selecciona un item (para cerrar sidebar mobile). */
  readonly itemSelected = output<void>();

  /** Clase CSS en el host. */
  @HostBinding('class.sidebar-collapsed')
  get isCollapsed(): boolean { return this.collapsed(); }

  /** Grupos de menú con estado de expansión. */
  readonly menuGroups: MenuGroup[] = SIDEBAR_MENU.map(g => ({
    label: g.label,
    icon: g.icon,
    expanded: true,
    items: g.items,
  }));

  /** Items para modo colapsado. */
  readonly collapsedItems: CollapsedItem[] = this._buildCollapsedItems();

  /** Toggle expansión de un grupo. */
  toggleGroup(group: MenuGroup): void {
    group.expanded = !group.expanded;
  }

  /** Navega a una ruta y emite itemSelected. */
  navigateTo(routerLink: string): void {
    this.router.navigate([routerLink]);
    this.itemSelected.emit();
  }

  /** Construye lista plana deduplicada para modo colapsado. */
  private _buildCollapsedItems(): CollapsedItem[] {
    const seen = new Set<string>();
    const items: CollapsedItem[] = [];
    for (const group of SIDEBAR_MENU) {
      let isFirst = true;
      for (const item of group.items) {
        if (seen.has(item.routerLink)) continue;
        seen.add(item.routerLink);
        items.push({ label: item.label, icon: item.icon, routerLink: item.routerLink, isFirstInGroup: isFirst });
        isFirst = false;
      }
    }
    return items;
  }
}
