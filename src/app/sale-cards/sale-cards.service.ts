import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SaleCards } from "./sale.model";


@Injectable({providedIn:'root'})
export class SaleCardsService{
    private baseUrl:string = 'https://steam-app-ee6c0-default-rtdb.firebaseio.com/Sales/';
    private myInfoEndpoint:string = 'Mock-Sale.json';
    
    constructor(private http: HttpClient){

    }

    getSaleCards(){
        return this.http.get<SaleCards []>(this.baseUrl + this.myInfoEndpoint);
    }
}