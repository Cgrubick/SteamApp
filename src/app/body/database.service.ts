import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfo } from "../headers/user-info.model";
@Injectable({
    providedIn: 'root'
})
export class DataBaseService{
    items: Observable<UserInfo []>
    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<UserInfo>('User-Info').valueChanges();
        
    }

    public showData(){
        this.items.subscribe((data) => {
        console.log("Data recieved");
        for(let item of data){
            console.log(item);
        }
        })
    }

}