import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../button.component';

describe('projects -> ngx-text-editor -> src -> text-editor -> components -> button -> ButtonComponent', () => {
  let component: ButtonComponent;
  let componentRef: ComponentRef<ButtonComponent>;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when click on button', () => {
    const spy = spyOn(component.buttonClick, 'emit');
    component.onClick();
    expect(component.selected).toBeFalse();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit when click on selectable button', () => {
    const spy = spyOn(component.buttonClick, 'emit');
    componentRef.setInput('buttonSelectedEnabled', true);
    fixture.detectChanges();
    component.onClick();
    expect(component.selected).toBeTrue();
    expect(spy).toHaveBeenCalled();
  });

  it('should not emit when click on disabled button', () => {
    const spy = spyOn(component.buttonClick, 'emit');
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
    component.onClick();
    expect(spy).not.toHaveBeenCalled();
  });
});
