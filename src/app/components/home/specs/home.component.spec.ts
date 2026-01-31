import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../home.component';
import { ComponentRef } from '@angular/core';

describe('src -> app -> components -> home -> HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let componentRef: ComponentRef<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
