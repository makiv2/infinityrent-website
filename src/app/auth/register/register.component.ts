import { Component, OnInit } from '@angular/core'; //TODO:fix
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('sdasdsdasdsad');

    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm.value)
    this.loading = true;
    this.authService.register(this.registerForm.value)
        .subscribe(
            data => {
                console.log(data)
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }
}
