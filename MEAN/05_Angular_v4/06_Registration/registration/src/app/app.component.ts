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
    let msg = "";
    msg += "Thank you for registering with us " + this.user.firstName + ".";
    msg += "  ";
    msg += "We just sent you a confirmation email at " + this.user.email;
    msg += ", and we will send all mail to " + this.user.street;
    if( this.user.street2 ) {
      msg += " " + this.user.street2;
    }
    msg += " " + this.user.city + ", " + this.user.state;

    document.getElementById( "success_region" ).appendChild( document.createTextNode( msg ) );
    document.getElementById( "success_region" ).style.display = "block";
  }
}
