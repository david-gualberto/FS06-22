import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControlName, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  title = 'ReactiveForm';

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.form = this.fb.group({

          heroInfo: this.fb.group({
              nome: [],
              alterego: [],
          }),
          superpoteri: this.fb.array([]),
          nemico: []
      });
  }

  getPotere() {
      return (this.form.get('superpoteri') as FormArray).controls;
  }
  addPoteri() {
      const control = this.fb.control(null);
      (this.form.get('superpoteri') as FormArray).push(control);
  }

  submit() {
      console.log(this.form?.value);
      console.log('Form correttamente inviato');
      this.form.reset();
  }

}
