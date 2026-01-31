import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextEditorComponent } from '../text-editor.component';

describe('projects -> ngx-text-editor -> src -> components -> text-editor -> TextEditorComponent', () => {
  let component: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
