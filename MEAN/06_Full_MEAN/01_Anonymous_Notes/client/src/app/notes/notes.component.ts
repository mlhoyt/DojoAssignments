import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [
    { _id: "1", text: "The new coffee shop has really good cold brew!", createdAt: "2017-06-11T06:11:58.001Z" },
    { _id: "2", text: "10,000 hours to mastery, we get over 1,500 hours of coding experience at Coding Dojo in less than 4 months.  Think about it.", createdAt: "2017-05-23T09:23:13.001Z" },
    { _id: "3", text: "Programming makes the day go by so fast, and it's so much fun!", createdAt: "2017-05-23T09:23:13.001Z" },
    { _id: "4", text: "One more to test the overflow", createdAt: "2017-06-17T19:41:13.241Z" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
