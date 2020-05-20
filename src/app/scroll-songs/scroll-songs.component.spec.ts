import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSongsComponent } from './scroll-songs.component';

describe('ScrollSongsComponent', () => {
  let component: ScrollSongsComponent;
  let fixture: ComponentFixture<ScrollSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
