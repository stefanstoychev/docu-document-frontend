import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaletteComponent } from './list-palette.component';

describe('ListExampleComponent', () => {
  let component: ListPaletteComponent;
  let fixture: ComponentFixture<ListPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPaletteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
