import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from '../icon.component';

describe('projects -> ngx-text-editor -> src -> text-editor -> components -> icon -> IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
