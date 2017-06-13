import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user: User = new User();
  pw_confirm: string = "";
  submit_enable: boolean = false;

  STATES = [
    "Alaska",
    "Hawaii",
    "Washington",
    "Oregon",
    "California",
    "Idaho",
    "Nevada",
    "Utah",
    "Arizona",
    "Montana",
    "Wyoming",
    "Colorado",
    "New Mexico",
  ];

  onSubmit() {
    console.log( "Debug: onSubmit: Checking form..." );
  }

  onChange( isFormValid ) {
    console.log( "Debug: onChange: isFormValid:", isFormValid );
    this.submit_enable = isFormValid;
  }
}
