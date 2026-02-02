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

  id = input<string>('');
  text = input<string>('');
  icon = input<string>('');
  border = input<boolean>(false);
  buttonSelectedEnabled = input<boolean>(false);
  disabled = input<boolean>(false);

  @Output() buttonClick = new EventEmitter<void>();

  public selected: boolean = false;

  public onClick(): void {
    if (this.disabled()) {
      return;
    }

    if (this.buttonSelectedEnabled()) {
      this.selected = !this.selected;
    }

    this.buttonClick.emit();
  }

  public select(): void {
    this.selected = true;
  }

  public unSelect(): void {
    this.selected = false;
  }
}
