import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AppComponent', () => {
  function MockComponent(options: Component): Component {
    const metadata: Component = {
      selector: options.selector,
      template: options.template || '',
      inputs: options.inputs,
      outputs: options.outputs
    };

    class Mock {}

    return Component(metadata)(Mock as any);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent({selector: 'app-header'}),
        MockComponent({selector: 'app-footer'})
      ],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'start-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('start-project');
  });
});
