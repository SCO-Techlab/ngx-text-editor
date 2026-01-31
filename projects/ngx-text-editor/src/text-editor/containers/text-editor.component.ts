import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../components';
import { ICONS } from '../constants';

@Component({
  selector: 'ngx-text-editor',
  standalone: true,
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [
    IconComponent
  ]
})
export class TextEditorComponent implements OnInit {

  public ICONS = ICONS;

  constructor() { }

  ngOnInit() {
  }

}
