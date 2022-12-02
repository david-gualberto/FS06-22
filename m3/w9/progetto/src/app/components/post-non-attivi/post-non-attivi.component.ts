import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/modules/posts';
import { elimina, getPostFiltered, getPosts, modificaPost } from '../../service/posts.service';
import { MarkerDirective } from 'src/app/directive/marker.directive';

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

  modificaStato(a:boolean, i:number) {
    modificaPost(true, i)
    this.posts = this.posts.filter((e)=>{
        if(e.id == i) {return false}
        return true
    })
  }

  eliminaPost(i:number) {
    elimina(i)
    this.posts = this.posts.filter((e)=>{
        if(e.id == i) {return false}
        return true
  })
}
}
