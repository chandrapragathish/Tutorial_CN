import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulecomponentComponent } from './modulecomponent.component';

describe('ModulecomponentComponent', () => {
  let component: ModulecomponentComponent;
  let fixture: ComponentFixture<ModulecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
