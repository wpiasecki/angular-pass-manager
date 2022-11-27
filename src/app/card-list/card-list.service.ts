import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataAccess } from "../service/data-access";


@Injectable()
export class CardListService {

    constructor(
        private data: DataAccess,
        private http: HttpClient) {
    }

    list(): Observable<Card[]> {
        return this.http
            .get<Card[]>(this.data.url);
    }

    save(card: Card) {
        throw "nyi";
    }

    delete(card: Card) {
        throw "nyi";
    }

    update(card: Card) {
        throw "nyi";
    }

}