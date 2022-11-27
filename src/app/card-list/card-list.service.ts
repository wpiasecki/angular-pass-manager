import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataAccess } from "../service/data-access";


@Injectable()
export class CardListService {

    listUpdated = new EventEmitter();

    constructor(
        private data: DataAccess,
        private http: HttpClient) {
    }

    list(): Observable<Card[]> {
        return this.http
            .get<Card[]>(this.data.url);
    }

    save(card: Card) {
        return this.http.post(this.data.url, card);
    }
    
    update(card: Card) {
        return this.http.put(`${this.data.url}/${card.id}`, card);
    }

    delete(card: Card) {
        return this.http.delete(`${this.data.url}/${card.id}`);
    }

    findByName(name: string) {
        throw "nyi";
    }

}