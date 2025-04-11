import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {

    let message =''

    if(error instanceof HttpErrorResponse){

      message = `HTTP Error :${error.status}-${error.message}`
    }else{

      message = error.message?error.message:error.toString()

    } 

    console.log("error haii");
    
    console.error('global error :' ,message);
    alert("something went wrong , check credentials")
  }
}
