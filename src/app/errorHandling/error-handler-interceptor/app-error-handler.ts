// import { HttpErrorResponse } from "@angular/common/http";
// import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
// import { Router } from "@angular/router";

// @Injectable()
// export class AppErrorHandler implements ErrorHandler{

//   constructor(private injector: Injector,private zone:NgZone){}

//   handleError(error:HttpErrorResponse): void{
//     const router=this.injector.get(Router);

//     if(error.status===0){

//     let redirect="error";
//     this.zone.run(() => {router.navigate([redirect])});
//     alert('Impossibile raggiungere il server');
//     return;
//   }
//   throw error;
//   }


// }
