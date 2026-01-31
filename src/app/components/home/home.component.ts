import { Component, OnInit } from '@angular/core';
import { TextEditorComponent } from 'projects/ngx-text-editor/src/text-editor';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TextEditorComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
