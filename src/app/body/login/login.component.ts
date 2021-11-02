import { Component } from '@angular/core';
import { UserInfo } from 'src/app/headers/user-info.model';
import { UserInfoService } from 'src/app/headers/user-info.service';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private infoService: UserInfoService, private dbService:DataBaseService) { 
    dbService.showData();
  }

  onEditUserInfo(data: UserInfo) {
    
    
    this.infoService.modifyUserInfo(data).subscribe(data =>{
      console.log("Updated Backend Info");
      console.log(data);
    });
  }

}
