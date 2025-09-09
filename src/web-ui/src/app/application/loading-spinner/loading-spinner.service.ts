import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  constructor(private spinnerService: NgxSpinnerService) {}

  show(): void {
    this.spinnerService.show();
  }

  hide(): void {
    this.spinnerService.hide();
  }
}
