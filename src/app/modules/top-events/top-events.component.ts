import { Component, OnInit } from '@angular/core';
import {TopEvent, TopEventsService} from "../../common/services/top-events.service";

@Component({
  selector: 'app-top-events',
  templateUrl: './top-events.component.html',
  styleUrls: ['./top-events.component.css']
})
export class TopEventsComponent implements OnInit {

  topEvents: TopEvent[] =[];

  constructor(private topEventsService: TopEventsService) { }

  ngOnInit(): void {
    this.topEventsService.getTopEvents().subscribe(response => {
      this.topEvents = response;
    //console.log(this.topEvents);
    });
  //setTimeout(() => {console.log(JSON.stringify(this.topEvents, null, "  "));}, 1000);
  }
}
