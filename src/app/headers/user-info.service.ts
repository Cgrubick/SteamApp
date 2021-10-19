import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn:'root'})
export class UserInfoService{
    private baseUrl:string = 'https://steam-app-ee6c0-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'my-info.json';
    constructor(private http: HttpClient){

    }

    getUserInfo(){
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }
}