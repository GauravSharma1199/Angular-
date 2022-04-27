import { Component, OnInit } from '@angular/core';
import { passwordChecker } from './custom-validator/password-checker';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registeredForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registeredForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required, Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTandC: [false, Validators.required],
      },
      {
        Validators: passwordChecker('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registeredForm.invalid) {
      return;
    }
    console.table(this.registeredForm.value);
    console.table(this.registeredForm);

    alert('Success SignUp\n' + JSON.stringify(this.registeredForm.value));
  }

  onReset() {
    this.submitted = false;
    this.registeredForm.reset();
  }
}
