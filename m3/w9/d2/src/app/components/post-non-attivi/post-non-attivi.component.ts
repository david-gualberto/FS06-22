import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/modules/posts';
import { getPostFiltered, getPosts } from '../../service/posts.service';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {
    posts:Posts[] = []

  constructor() { }

  ngOnInit(): void {
    this.posts=[]
    getPostFiltered(false).then((res)=>{this.posts=res})

  }
}
