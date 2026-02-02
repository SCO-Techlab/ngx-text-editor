import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output, QueryList, ViewChildren } from '@angular/core';
import { POSITION } from '../../enums';
import { IButtonComponent } from '../../interfaces';
import { ButtonComponent } from '../button';

@Component({
  selector: 'te-actions-group',
  standalone: true,
  templateUrl: './actions-group.component.html',
  styleUrls: ['./actions-group.component.scss'],
  imports: [
    NgClass,
    ButtonComponent
  ]
})
export class ActionsGroupComponent {

  actions = input<IButtonComponent[]>([]);
  border = input<boolean>(true);
  borderPosition = input<POSITION>(POSITION.LEFT);

  @Output() actionClick = new EventEmitter<IButtonComponent>();

  @ViewChildren('actionButton') actionButtons!: QueryList<ButtonComponent>;

  public isRightPosition(): boolean {
    return this.borderPosition() === POSITION.RIGHT;
  }

  public onClickAction(action: IButtonComponent, actionButton: ButtonComponent): void {
    if (actionButton.buttonSelectedEnabled()) {
      this.actionButtons.forEach(button => {
        if (button.id() !== action.id) {
          button.unSelect();
        }
      });
    }

    if (!action.clickCallback) {
      this.actionClick.emit(action);
    } else {
      action.clickCallback();
    }
  }
}
