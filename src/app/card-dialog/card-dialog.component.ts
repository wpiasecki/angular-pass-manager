import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { observable, Observable } from 'rxjs';
import { CardListComponent } from '../card-list/card-list.component';
import { CardListService } from '../card-list/card-list.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.sass']
})
export class CardDialogComponent implements OnInit {

  card = <Card>{};
  closeDialogAndUpdateList = response => {
    this.dialogRef.close();
    this.cardService.listUpdated.emit(true);
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    public dialogRef: MatDialogRef<CardDialogComponent>,
    private cardService: CardListService) { }

  ngOnInit() {
    this.card = JSON.parse(JSON.stringify(this.data.card));
  }

  save() {
    const observable = this.card.id ? 
      this.cardService.update(<Card>this.card) 
      : this.cardService.save(<Card>this.card);
        
    observable.subscribe(this.closeDialogAndUpdateList);
  }

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.cardService
      .delete(this.card)
      .subscribe(this.closeDialogAndUpdateList);
  }

}
