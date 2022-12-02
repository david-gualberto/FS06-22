import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/modules/user';

@Component({
  selector: 'app-dettagli-user',
  templateUrl: './dettagli-user.component.html',
  styleUrls: ['./dettagli-user.component.scss']
})

export class DettagliUserComponent implements OnInit {

    users:User[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}





