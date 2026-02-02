import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_DEFAULT_SIZE, MAGIC_NUMBERS } from '../../../constants';
import { IconComponent } from '../icon.component';

describe('projects -> ngx-text-editor -> src -> text-editor -> components -> icon -> IconComponent', () => {
  let component: IconComponent;
  let componentRef: ComponentRef<IconComponent>;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get icon size', () => {
    expect(component.getIconSize()).toBe(ICON_DEFAULT_SIZE);

    componentRef.setInput('size', MAGIC_NUMBERS.N_10);
    fixture.detectChanges();
    expect(component.getIconSize()).toBe(MAGIC_NUMBERS.N_10);

    componentRef.setInput('size', MAGIC_NUMBERS.N_MINUS_1);
    fixture.detectChanges();
    expect(component.getIconSize()).toBe(ICON_DEFAULT_SIZE);
  });
});
