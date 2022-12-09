import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  user:any = [];
  constructor() { }

  ngOnInit(): void {
    let aaa:any = localStorage.getItem('user')
    this.user = JSON.parse(aaa)
    }

  }

