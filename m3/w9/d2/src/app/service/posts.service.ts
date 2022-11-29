import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Posts } from '../modules/posts';

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
