import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  saveLogin(pass:Boolean){
    localStorage.setItem('pass',JSON.stringify(pass))
  }

  getItem(){
    let pass= JSON.parse(localStorage.getItem('pass'))
    return pass;
  }

  deleteItem(pass:Boolean){
    localStorage.setItem('pass',JSON.stringify(pass))
  }
}
