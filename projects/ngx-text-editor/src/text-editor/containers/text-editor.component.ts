import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components';
import { ICONS, MAGIC_NUMBERS } from '../constants';
import { HistoryService } from '../services';

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
export class TextEditorComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  public ICONS = ICONS;
  public text: string = '';

  private historyService = inject(HistoryService);

  ngOnInit(): void {
    this.historyService.saveHistoryState(this.text);
  }

  public undo(): void {
    const undoText: string = this.historyService.undo();
    if (undoText !== undefined) {
      this.text = undoText;
      this.change.emit(this.formatTextAreaValue(this.text));
    }
  }

  public redo(): void {
    const redoText: string = this.historyService.redo();
    if (redoText !== undefined) {
      this.text = redoText;
      this.change.emit(this.formatTextAreaValue(this.text));
    }
  }

  public onTextAreaChange(value: string): void {
    console.log(value);
    this.historyService.saveHistoryState(value);
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
