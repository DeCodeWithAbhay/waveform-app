import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ControlsComponent } from './components/controls/controls.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { OutputComponent } from './components/output/output.component';
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, ControlsComponent, CanvasComponent, OutputComponent],
  template: `
<div class="container">
  <!-- First Section: Controls -->
  <div class="left-section">
    <app-controls (signalAdded)="onSignalAdded()"></app-controls>
    <app-output></app-output>
  </div>

  <!-- Second Section: Canvas -->
  <div class="top-right-section">
  <app-canvas [redrawTrigger]="redrawTrigger"></app-canvas>
  </div>
</div>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'waveform-app';
  userText: string = ''; // Define userText property with an initial empty string
  redrawTrigger = 0;

  onSignalAdded() {
    // Update the redraw trigger to notify the canvas component
    this.redrawTrigger++;
    console.log(this.redrawTrigger);
  }
}
