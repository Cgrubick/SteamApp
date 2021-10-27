import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/headers/user-info.model';
import { UserInfoService } from 'src/app/headers/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private infoService: UserInfoService) { }

  onEditUserInfo(data: UserInfo) {
    
    
    this.infoService.modifyUserInfo(data).subscribe(data =>{
      console.log("Data uploaded!");
      console.log(data);
      
    });
  }

}
