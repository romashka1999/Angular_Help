import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [`
  input.ng-invalid.ng-touched {
    border: 1px solid red;
  }

  input.ng-valid.ng-touched {
    border: 1px solid green;
  }
  `]
})
export class ReactiveComponent implements OnInit, OnDestroy {

  valueChangesSub: Subscription;
  statusChangesSub: Subscription;
  genders: any[] = ['male', 'female'];
  signUpForm: FormGroup;

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, Validators.minLength(3),this.forbiddenNamesValidator]),
        email: new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmailsValidator]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    this.valueChangesSub = this.signUpForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });

    this.statusChangesSub = this.signUpForm.statusChanges.subscribe((status: any) => {
      console.log(status);
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const controll = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(controll);
  }

  // custom form validator
  forbiddenNamesValidator(control: FormControl) {
    const forbiddenUsernames = ['roma', 'romashka']; 
    if(forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true}
    } else {
      return null;
    }
  }

  // custom form async validator
  forbiddenEmailsValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=> {
        if(control.value === 'roma@gmail.com') {
          resolve({emailIsForbidden: true})
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }


  // FormGroupErrorHandler(controlName: string) {
  //   console.log(controlName);
  //   if (controlName) {
  //       if (this.signUpForm.controls[controlName] && this.signUpForm.controls[controlName].errors) {
  //           const error = this.signUpForm.controls[controlName].errors
  //           if (error['minlength']) {
  //               return `required min length is ${error['minlength'].requiredLength}.`
  //           } else {
  //               return `${controlName} is required`
  //           }
  //       }
  //   }
  // }

  ngOnDestroy() {
    this.valueChangesSub.unsubscribe();
    this.statusChangesSub.unsubscribe();
  }
}
