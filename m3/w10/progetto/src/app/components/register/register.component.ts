import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth-response';
import { AuthService } from 'src/app/service/auth.service';
import {catchError} from 'rxjs'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err:string|undefined;

  @ViewChild('f', {static: true}) f!: NgForm;

  constructor(private authSrv:AuthService, private r:Router) { }

  ngOnInit(): void {
  }

  registrati(f:NgForm):void {

     let data: User = {
      nome: f.value.nome,
      email: f.value.email,
      password: f.value.password
     }

    console.log(data)
    this.authSrv.registrazione(data).pipe(catchError(err=> {
        this.err = err.error
      throw err
    })).subscribe(res => {
      this.err = undefined
      this.r.navigate(["login"]);
    })
  }
}
