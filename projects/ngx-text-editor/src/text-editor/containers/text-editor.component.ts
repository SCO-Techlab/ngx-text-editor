import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionsGroupComponent } from '../components';
import { ICONS } from '../constants';
import { IButtonComponent } from '../interfaces';
import { HistoryService, TextEditorService } from '../services';

@Component({
  selector: 'ngx-text-editor',
  standalone: true,
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [
    FormsModule,
    ActionsGroupComponent
  ]
})
export class TextEditorComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  public text: string = '';
  public historyActions: IButtonComponent[] = [];
  public colorActions: IButtonComponent[] = [];
  public textStyleActions: IButtonComponent[] = [];
  public textAlignActions: IButtonComponent[] = [];
  public textListActions: IButtonComponent[] = [];
  public imageActions: IButtonComponent[] = [];

  private textEditorService = inject(TextEditorService);
  private historyService = inject(HistoryService);

  ngOnInit(): void {
    this.historyActions = [
      {
        id: ICONS.ARROW_COUNTERCLOCKWISE,
        icon: ICONS.ARROW_COUNTERCLOCKWISE,
        text: '',
        border: false,
        buttonSelectedEnabled: false,
        disabled: false,
        clickCallback: this.undo.bind(this)
      },
      {
        id: ICONS.ARROW_CLOCKWISE,
        icon: ICONS.ARROW_CLOCKWISE,
        text: '',
        border: false,
        buttonSelectedEnabled: false,
        disabled: false,
        clickCallback: this.redo.bind(this)
      }
    ];

    this.colorActions = [
      {
        id: ICONS.PALETTE,
        icon: ICONS.PALETTE,
        text: '#000',
        border: false,
        buttonSelectedEnabled: false,
        disabled: false
      }
    ];

    this.textStyleActions = [
      {
        id: ICONS.TYPE_BOLD,
        icon: ICONS.TYPE_BOLD,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TYPE_UNDERLINE,
        icon: ICONS.TYPE_UNDERLINE,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TYPE_STRIKETHROUGH,
        icon: ICONS.TYPE_STRIKETHROUGH,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TYPE_ITALIC,
        icon: ICONS.TYPE_ITALIC,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      }
    ];

    this.textAlignActions = [
      {
        id: ICONS.TEXT_LEFT,
        icon: ICONS.TEXT_LEFT,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TEXT_CENTER,
        icon: ICONS.TEXT_CENTER,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TEXT_RIGHT,
        icon: ICONS.TEXT_RIGHT,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.TEXT_JUSTIFY,
        icon: ICONS.TEXT_JUSTIFY,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      }
    ];

    this.textListActions = [
      {
        id: ICONS.LIST_OL,
        icon: ICONS.LIST_OL,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      },
      {
        id: ICONS.LIST_UL,
        icon: ICONS.LIST_UL,
        text: '',
        border: false,
        buttonSelectedEnabled: true,
        disabled: false
      }
    ];

    this.imageActions = [
      {
        id: ICONS.CARD_IMAGE,
        icon: ICONS.CARD_IMAGE,
        text: '',
        border: false,
        buttonSelectedEnabled: false,
        disabled: false
      }
    ];

    this.historyService.saveHistoryState(this.text);
  }

  public editorChange(value: string): void {
    this.historyService.saveHistoryState(value);
    this.change.emit(this.textEditorService.formatRichText(value));
  }

  public undo(): void {
    const undoText: string = this.historyService.undo();
    if (undoText !== undefined) {
      this.text = undoText;
      this.change.emit(this.textEditorService.formatRichText(this.text));
    }
  }

  public redo(): void {
    const redoText: string = this.historyService.redo();
    if (redoText !== undefined) {
      this.text = redoText;
      this.change.emit(this.textEditorService.formatRichText(this.text));
    }
  }

  public onClickAction(action: IButtonComponent): void {
    console.log("onClickAction");
    console.log(action);
  }
}
