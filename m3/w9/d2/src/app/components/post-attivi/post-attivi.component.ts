import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/modules/posts';
import { getPostFiltered, getPosts } from '../../service/posts.service';



@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    posts:Posts[] = []

  constructor() {
   }

   ngOnInit(): void {
    this.posts=[]
    getPostFiltered(true).then((res)=>{this.posts=res})
  }
}
