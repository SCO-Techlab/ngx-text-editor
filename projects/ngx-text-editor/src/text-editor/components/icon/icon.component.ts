import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { ICONS } from '../../constants';

@Component({
  selector: 'te-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    NgClass,
  ]
})
export class IconComponent {
  icon = input<string>('');
  canBeClick = input<boolean>(false);

  @Output() click = new EventEmitter<void>();

  public ICONS = ICONS;

  public onClick(): void {
    if (this.canBeClick()) {
      this.click.emit();
    }
  }
}
