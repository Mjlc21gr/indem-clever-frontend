import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-topbar',
  imports: [Toolbar, Button, Avatar, Tag],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  /** Name displayed in the user avatar area. */
  userName = input('Usuario');

  /** Emits when the sidebar toggle button is clicked. */
  readonly toggleSidebar = output<void>();

  /** Handles the sidebar toggle button click. */
  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
