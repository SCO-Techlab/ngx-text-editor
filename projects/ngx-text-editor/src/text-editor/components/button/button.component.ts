import { Component, EventEmitter, input, Output } from '@angular/core';
import { IconComponent } from '../icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'te-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    NgClass,
    IconComponent
  ]
})
export class ButtonComponent {

  text = input<string>('');
  icon = input<string>('');
  border = input<boolean>(false);
  buttonSelectedEnabled = input<boolean>(false);
  disabled = input<boolean>(false);

  @Output() click = new EventEmitter<void>();

  public selected: boolean = false;

  public onClick(): void {
    if (this.disabled()) {
      return;
    }

    if (this.buttonSelectedEnabled()) {
      this.selected = !this.selected;
    }

    this.click.emit();
  }
}
