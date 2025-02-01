import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ Fixed 'styleUrls'
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa-eye" : "fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Send data to the database
      console.log(this.loginForm.value);
    } else {
      console.log('Form is not valid');
      this.ValidateAllFormFields(this.loginForm);
      alert("Your form is invalid");
    }
  }

  private ValidateAllFormFields(formGroup: FormGroup) { // ✅ Renamed 'FormGroup' to 'formGroup'
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control && control instanceof FormGroup) { // ✅ Ensure 'control' is not null
        this.ValidateAllFormFields(control);
      }
    });
  }
}
