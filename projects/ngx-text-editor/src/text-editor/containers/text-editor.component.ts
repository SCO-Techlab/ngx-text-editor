import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../components';
import { ICONS } from '../constants';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-text-editor',
  standalone: true,
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TextEditorComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  public ICONS = ICONS;
  public textAreaForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initTextAreaForm();
    this.subscribeTextAreaChanges();
  }

  private initTextAreaForm(): void {
    this.textAreaForm = new FormGroup({
      textArea: new FormControl('')
    });
  }

  private subscribeTextAreaChanges(): void {
    this.textAreaForm.valueChanges.subscribe(formControl => {
      const value: string = formControl.textArea;
      const formatedValue: string = this.formatTextAreaValue(value);
      console.log(formatedValue);
      this.change.emit(formatedValue);
    });
  }

  private formatTextAreaValue(text: string): string {
    return text;
  }
}
