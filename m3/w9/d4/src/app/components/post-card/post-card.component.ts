import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/modules/posts';
import { getPostFiltered, getPosts, modificaPost } from '../../service/posts.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

    @Input() posts!:Posts

  constructor() { }

  ngOnInit(): void {
  }

}
