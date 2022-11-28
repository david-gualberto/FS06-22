import { Component, inject, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';


@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})


export class ListToDoComponent implements OnInit {

  arrayTask:Todo[]=[]

  constructor() {
  }

  ngOnInit(): void {  //tutto ciò che deve essere eseguito all'inizio
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
      return response.json();}).then((data:Todo[]) => {
        this.arrayTask = data });
  }

    //metodo per selezionare quelli con completed = false
  getTodo(completed:boolean = false):Todo[] {
    return this.arrayTask.filter(e=>e.completed == completed)
  }
}
