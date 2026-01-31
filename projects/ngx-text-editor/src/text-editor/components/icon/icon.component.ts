import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { ICONS } from '../../constants';

@Component({
  selector: 'te-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [NgStyle]
})
export class IconComponent {
  icon = input<string>('');
  size = input<number>(24);
  public readonly ICONS = ICONS;
  public readonly DEFAULT_SIZE = 24;
}
