import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.matDialog.open(CardDialogComponent, {
      width: '400px',
      data : { 
        card: this.card
      }
    });

  }

}
