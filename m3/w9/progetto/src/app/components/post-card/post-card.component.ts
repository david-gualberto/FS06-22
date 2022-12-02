import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/modules/posts';
import {
    getPostFiltered
} from '../../service/posts.service';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
    @Input() posts!: Posts;
    post: Posts[] = [];

    constructor() {}

    ngOnInit(): void {
        this.post = [];
        getPostFiltered(true).then((res) => {
            this.post = res;
        });
    }

}
