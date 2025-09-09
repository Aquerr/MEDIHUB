import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AswgSpinnerComponent} from './application/loading-spinner/medihub-spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AswgSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('medihub-web');
}
