import { Component, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  cards: Array<Card>;

  constructor(
    private cardListService: CardListService) {
  }

  ngOnInit() {
    console.log('card-list-component.ngOnInit');
    this.cardListService.list().subscribe(cards => this.cards = cards);
  }

}
