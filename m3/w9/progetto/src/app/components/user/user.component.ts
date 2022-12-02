import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/modules/user';
import { getUser} from 'src/app/service/posts.service';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    users: User[] = [];

    constructor(private route: ActivatedRoute, private router: Router ) {}

    ngOnInit(): void {
        this.users = []
        getUser().then((res) => {
            this.users = res
        });
    }

    navigation(id:number) {
        this.router.navigate([":"+id], { relativeTo: this.route});
    }
}
