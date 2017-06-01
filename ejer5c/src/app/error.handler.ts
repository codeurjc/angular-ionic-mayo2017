import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('Error: ' + error);
    console.log(error);
    throw error;
  }
}
