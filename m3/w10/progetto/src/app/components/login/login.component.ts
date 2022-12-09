import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth-response';
import { AuthService } from 'src/app/service/auth.service';
import {catchError} from 'rxjs'
import { Login } from 'src/app/interface/auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:string|undefined;

  @ViewChild('l', {static: true}) l!: NgForm;

  constructor(private authSrv:AuthService, private r:Router) { }

  ngOnInit(): void {
  }

  login(l:NgForm){
    let data:Login = {
      email: l.value.email,
      password: l.value.password
    }
    this.authSrv.accedi(data).pipe(catchError(err=> {
      this.err = err.error
    throw err
  })).subscribe(res => {
      this.r.navigate(['home'])
    })
  }

}
