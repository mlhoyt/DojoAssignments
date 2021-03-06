import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    { email_address: "Bill@Gates.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI willlaunch in year 2100.",
    },
    { email_address: "Ada@Lovelac.com",
      importance: true,
      subject: "Programming",
      content: "Enchantress of Numbers",
    },
    { email_address: "John@CARMAC.com",
      importance: false,
      subject: "Updated Algo",
      content: "New algorithm for shadow volumes.",
    },
    { email_address: "Gabe@NewEl.com",
      importance: false,
      subject: "HL3!",
      content: "Just kidding...",
    },
  ]
}
