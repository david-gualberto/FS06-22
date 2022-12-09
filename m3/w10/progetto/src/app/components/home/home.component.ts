import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authSrv:AuthService, private router:Router, private route: ActivatedRoute) { }
  user:any = [];

 ngOnInit():void {
  }

  esci() {
    this.authSrv.logOut()
  }


}
