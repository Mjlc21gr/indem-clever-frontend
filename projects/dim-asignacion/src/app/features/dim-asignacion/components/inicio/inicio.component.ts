import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';
import { Fluid } from 'primeng/fluid';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-inicio',
  imports: [Card, Image, Fluid, Panel],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {}
