import { TestBed } from '@angular/core/testing';
import { TextEditorService } from '../text-editor.service';

describe('projects -> ngx-text-editor -> src -> text-editor -> services -> text-editor -> TextEditorService', () => {
  let service: TextEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TextEditorService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
