import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsGroupComponent } from '../actions-group.component';

describe('projects -> ngx-text-editor -> src -> text-editor -> components -> actions-group -> ActionsGroupComponent', () => {
  let component: ActionsGroupComponent;
  let componentRef: ComponentRef<ActionsGroupComponent>;
  let fixture: ComponentFixture<ActionsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionsGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsGroupComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
