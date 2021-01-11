import { group } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
  static areEqual(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true}

  }
}
