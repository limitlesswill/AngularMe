import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, NgForm, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = new User('');

  save(signupForm: NgForm) {
    console.log(signupForm.form);
    console.log('Saved', JSON.stringify(signupForm.value));
  }

  constructor(private formBuilder: FormBuilder) { }

  form_Group: FormGroup = this.formBuilder.group({
    firstName: ['first name', [Validators.required, Validators.minLength(5)]],
    lastName: ['last name', [Validators.required, Validators.minLength(5)]],
    email: ['email@company.iti', [Validators.required, Validators.email]],
    address: this.formBuilder.array([])
  })

  get firstName() {
    return this.form_Group.get('firstName');
  }

  get address() {
    return this.form_Group.get('address') as FormArray;
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      city: ['', [Validators.required]],
      street: ['', [Validators.required]]
    });
  }

  addAdress() {
    this.address.push(this.newAddress());
  }

  removeAddress(i: number) {
    console.log(i);
    this.address.removeAt(i);

  }

}
