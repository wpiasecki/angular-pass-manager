import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CardListService } from './card-list/card-list.service';
import { DataAccess } from './service/data-access';
import { HttpClientModule } from '@angular/common/http';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    CardListService,
    DataAccess
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    CardDialogComponent
  ]
})
export class AppModule { }
