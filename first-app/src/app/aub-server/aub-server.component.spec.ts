import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AubServerComponent } from './aub-server.component';

describe('AubServerComponent', () => {
  let component: AubServerComponent;
  let fixture: ComponentFixture<AubServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AubServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AubServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
