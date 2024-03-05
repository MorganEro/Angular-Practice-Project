import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FormsModule } from '@angular/forms';
import { GigabytesToMegabytesPipe } from './pipes/gigabytes-to-megabytes.pipe';
import { MyDateService } from './myService/my-date.service';
import { UserDataService } from './myService/user-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NewCompComponent, GigabytesToMegabytesPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MyDateService, UserDataService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
