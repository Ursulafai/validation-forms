import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), this.userNameValidator]],
      lastname: ['', [Validators.required, Validators.minLength(6), this.userNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  userNameValidator({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /^[/a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        onlyLetters: 'No special symbols'
      };
  }
}
