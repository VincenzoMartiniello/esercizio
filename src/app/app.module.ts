import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { TitleComponent } from './utility/title/title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './utility/color/color.directive';
//import { AppErrorHandler } from './app-error-handler';
import { ErrorComponent } from './errorHandling/error/error.component';
import { ErrorInterceptor } from './errorHandling/error-handler-interceptor/error-interceptor';
import { WrapperComponent } from './wrapper/wrapper-component/wrapper.component';
import { FormComponent } from './wrapper/form/form.component';
import { TabellaComponent } from './wrapper/tabella/tabella.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 // <-- NgModel lives here
 import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ColorDirective,
    ErrorComponent,
    WrapperComponent,
    FormComponent,
    TabellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
