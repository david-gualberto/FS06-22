import { Component, OnInit } from '@angular/core';
import * as todoSrv from '../../service/posts.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
