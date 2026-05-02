import { Component, signal, computed, inject, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AuthService } from './core/services/auth.service';
import { Toast } from 'primeng/toast';

/** Breakpoint below which the sidebar becomes a mobile overlay. */
const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly auth = inject(AuthService);

  /** Whether the sidebar is collapsed (desktop) or hidden (mobile). */
  sidebarCollapsed = signal(false);

  /** Whether we are in mobile viewport. */
  isMobile = signal(window.innerWidth <= MOBILE_BREAKPOINT);

  /** On mobile the sidebar is open as overlay; on desktop it's the inverse of collapsed. */
  sidebarMobileOpen = signal(false);

  /** Current user display name (from auth service). */
  userName = computed(() => this.auth.nombreUsuario());

  /** Listens for window resize to update mobile state. */
  @HostListener('window:resize')
  onResize(): void {
    const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
    this.isMobile.set(mobile);
    if (!mobile) {
      this.sidebarMobileOpen.set(false);
    }
  }

  /** Toggles the sidebar: collapse on desktop, overlay on mobile. */
  toggleSidebar(): void {
    if (this.isMobile()) {
      this.sidebarMobileOpen.update((open) => !open);
    } else {
      this.sidebarCollapsed.update((collapsed) => !collapsed);
      document.documentElement.classList.toggle('sidebar-collapsed', this.sidebarCollapsed());
    }
  }

  /** Closes the mobile sidebar overlay (called when a menu item is selected). */
  closeMobileSidebar(): void {
    if (this.isMobile()) {
      this.sidebarMobileOpen.set(false);
    }
  }
}
