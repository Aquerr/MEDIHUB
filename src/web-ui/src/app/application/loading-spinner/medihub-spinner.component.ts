import {Component} from '@angular/core';
import {NgxSpinnerComponent} from 'ngx-spinner';

@Component({
  selector: "app-medihub-spinner",
  templateUrl: "./medihub-spinner.component.html",
  imports: [
    NgxSpinnerComponent
  ],
  styleUrls: ["./medihub-spinner.component.scss"]
})
export class AswgSpinnerComponent {
  constructor() {}
}
