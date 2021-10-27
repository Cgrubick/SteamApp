import { Component, Injectable, Input, OnInit } from "@angular/core";
import { SaleCardsService } from "./sale-cards.service";
import { SaleCards } from "./sale.model";


@Component({
    selector: 'app-sale-cards',
    templateUrl: 'sale-cards.component.html'
})
export class SaleCardsComponent implements OnInit{
    mySale: SaleCards | undefined;

    constructor(private saleCardsService:SaleCardsService){

    }
    ngOnInit(): void {
        console.log("Registering showsaleCards as a subscriber");
        this.showsaleCards();
    }
    
    showsaleCards(){
        this.saleCardsService.getSaleCards().subscribe((data: SaleCards []) => {
            console.log(data);
            for(var item in data){
                console.log(data[item]);
                this.mySale = data[item];
            }
           
        })
    }
}