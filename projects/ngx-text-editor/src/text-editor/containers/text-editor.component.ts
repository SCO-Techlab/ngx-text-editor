import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../components';
import { ICONS, MAGIC_NUMBERS } from '../constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-text-editor',
  standalone: true,
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [
    FormsModule,
    ButtonComponent,
  ]
})
export class TextEditorComponent {

  @Output() change = new EventEmitter<string>();

  public ICONS = ICONS;
  public text: string = '';

  public onTextAreaChange(value: string): void {
    this.change.emit(this.formatTextAreaValue(value));
  }

  private formatTextAreaValue(text: string): string {
    const lines: string[] = text.split('\n');
    if (!lines || lines.length === MAGIC_NUMBERS.N_0) {
      return text;
    }

    let formattedText: string = '';
    lines.forEach((line: string) => {
      formattedText += `${line}<br>`;
    });

    return formattedText;
  }
}
