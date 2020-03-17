import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
  input.ng-invalid.ng-touched {
    border: 1px solid red;
  }

  input.ng-valid.ng-touched {
    border: 1px solid green;
  }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('f', {static: false}) signUpFrom: NgForm;
  defaultSecretQuestion: string = 'teacher';
  answer: string = '';

  genders = ['male', 'female'];

  constructor() { }

  ngOnInit(): void {
  }

  onSuggestUsername() {
    const suggestedUsername = 'roma';
    // this.form.setValue({
    //   userData: {
    //     username: suggestedUsername,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   secretQuestionAnswer: '',
    //   gender:'male'
    // })

    this.signUpFrom.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    })
  }

  onResetForm() {
    this.signUpFrom.reset();
  }

  onSubmit() {
    console.log(this.signUpFrom.value);
  }
}
