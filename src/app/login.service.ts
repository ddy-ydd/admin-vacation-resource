import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLoginDetails(login:any):boolean 
  {
    if (login.emailid=="admin" && login.password=="1234")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
