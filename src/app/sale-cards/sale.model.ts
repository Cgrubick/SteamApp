export class Sale{
    price:string;
    imagePath:string;

    constructor({price,imagePath} :
        {price:string , imagePath:string}) {
        this.price = price;
        this.imagePath = imagePath;
    }

}