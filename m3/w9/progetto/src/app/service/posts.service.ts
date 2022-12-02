import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Posts } from '../modules/posts';
import { User } from '../modules/user';

export function getPosts() {
    let f = fetch('http://localhost:3000/posts');
    let r = f.then((res): Promise<Posts[]> => {
        return res.json();
    });
    return r;
}

export function getPostFiltered(a: boolean) {
    let t = getPosts().then((res) => {
        let arrFiltrato = res.filter((e) => {
            return e.active == a;
        });
        return arrFiltrato;
    });
    return t;
}

export function modificaPost(a:boolean, i:number) {
    fetch(`http://localhost:3000/posts/${i}`, {
  method: 'PATCH',
  body: JSON.stringify({
    active: a,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
}

export function elimina(i:number) {
    fetch(`http://localhost:3000/posts/${i}`, {
  method: 'DELETE',
})
}

export function getUser() {
    let f = fetch('http://localhost:3000/users/');
    let r = f.then((res): Promise<User[]> => {
        return res.json();
    })
    return r
}

