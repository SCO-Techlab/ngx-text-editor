import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { ICON_DEFAULT_SIZE, ICONS, MAGIC_NUMBERS } from '../../constants';

@Component({
  selector: 'te-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    NgStyle,
    NgClass
  ]
})
export class IconComponent {
  icon = input<string>('');
  size = input<number>(ICON_DEFAULT_SIZE);
  contrast = input<boolean>(false);

  public readonly ICONS = ICONS;

  public getIconSize(): number {
    return this.size() > MAGIC_NUMBERS.N_0
      ? this.size()
      : ICON_DEFAULT_SIZE
  }
}
