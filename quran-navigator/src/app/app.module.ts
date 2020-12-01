import { VerseService } from './verse.service';
import { Configuration } from './configuration';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { SouarComponent } from "./souar/souar.component";
@NgModule({
  declarations: [AppComponent, SouarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [Configuration,
    VerseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
