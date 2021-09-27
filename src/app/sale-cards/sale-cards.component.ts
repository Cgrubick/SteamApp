import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-sale-cards',
    templateUrl: 'sale-cards.component.html'
})
export class SaleCardsComponent {
    @Input()
    price!:string;
    @Input()
    imagePath!:string;

}