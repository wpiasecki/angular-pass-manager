import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CardListService } from './card-list.service';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  cards: Array<Card>;

  constructor(
    private cardListService: CardListService,
    private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.loadCardList();
    this.cardListService.listUpdated.subscribe(() => this.loadCardList());
  }

  loadCardList() {
    this.cardListService
      .list()
      .subscribe(cards => this.cards = cards);
  }

  newCard() {
    this.openDialog({});
  }

  editCard(card) {
    this.openDialog(card);
  }

  openDialog(card) {
    this.matDialog.open(CardDialogComponent, {
      width: '400px',
      data : { 
        card: card
      }
    });
  }

}
