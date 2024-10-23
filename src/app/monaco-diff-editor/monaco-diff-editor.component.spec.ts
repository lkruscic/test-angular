import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoDiffEditorComponent } from './monaco-diff-editor.component';

describe('MonacoDiffEditorComponent', () => {
  let component: MonacoDiffEditorComponent;
  let fixture: ComponentFixture<MonacoDiffEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonacoDiffEditorComponent]
    });
    fixture = TestBed.createComponent(MonacoDiffEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
