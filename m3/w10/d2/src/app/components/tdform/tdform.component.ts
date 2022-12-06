import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TDFormComponent implements OnInit {

  ctitle = 'tdForm';

  @ViewChild('form', {static: true}) form!: NgForm;

  hero: any = {
    nome:'',
    alterego: '',
    potere:'',
    nemico: '',
    pianeta:'',
    debolezza:''
  }

  ngOnInit(): void {
}

submit() {
    this.hero.nome = this.form.value.heroInfo.nome;
    this.hero.alterego = this.form.value.heroInfo.alterego;
    this.hero.potere = this.form.value.heroInfo.potere;
    this.hero.nemico = this.form.value.heroInfo.nemico;
    this.hero.pianeta = this.form.value.heroInfo.pianeta;
    this.hero.debolezza = this.form.value.heroInfo.debolezza;

    this.form.reset();
    console.log(this.hero)
}


}
