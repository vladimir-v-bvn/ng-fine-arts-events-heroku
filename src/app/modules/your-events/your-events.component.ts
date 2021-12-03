import {AfterViewInit, Component, OnInit} from '@angular/core';
import {YourEvent, YourEventsService} from "../../common/services/your-events.service";
import {HttpParams} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-your-events',
  templateUrl: './your-events.component.html',
  styleUrls: ['./your-events.component.css']
})
export class YourEventsComponent implements OnInit, AfterViewInit {

  yourEvents: YourEvent[] =[]
  yourEventsForm: FormGroup

  constructor(private yourEventsService: YourEventsService) { }

  ngOnInit(): void {
    this.yourEventsForm = new FormGroup({})


    this.getYourEvents()
  }
  ngAfterViewInit() {

  }
  getYourEvents() {
    /*
        @DefaultValue("%") @QueryParam("ename") String ename,
        @DefaultValue("%") @QueryParam("ecity") String ecity,
        @DefaultValue("2010-12-31") @QueryParam("edate1") String edate1,
        @DefaultValue("2100-01-01") @QueryParam("edate2") String edate2,
        @DefaultValue("0") @QueryParam("page") String page
    */
    let httpParams = new HttpParams()
      .append('ename', String('bois'))
      .append('ecity', String('Moscow'))
      .append('page', String('0'));
    this.yourEventsService.getYourEvents(httpParams).subscribe(response => this.yourEvents = response)
  }



}
