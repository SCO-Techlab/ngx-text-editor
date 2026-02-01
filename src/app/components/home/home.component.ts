import { Component } from '@angular/core';
import { TextEditorComponent } from 'projects/ngx-text-editor/src/text-editor';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TextEditorComponent]
})
export class HomeComponent {

  public text: string = '';

  public onTextEditorChange(value: string): void {
    console.log(value);
    this.text = value;
  }

}
