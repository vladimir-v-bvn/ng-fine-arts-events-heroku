import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddYourEventService } from 'src/app/common/services/add-your-event.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { AddYourEventPayload } from '../add-your-event-payload';

@Component({
  selector: 'app-add-your-event',
  templateUrl: './add-your-event.component.html',
  styleUrls: ['./add-your-event.component.css']
})

export class AddYourEventComponent implements OnInit {

  addYourEventForm: FormGroup;
  addYourEventPayload: AddYourEventPayload;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private addYourEventService: AddYourEventService,
              public authService: AuthService ) {
    this.addYourEventForm = this.formBuilder.group({
      eventName: '',
      eventDate: '',
      locationId: '',
      responseStatus: ''


    });
    this.addYourEventPayload = {
      eventName: '',
      eventDate: new Date('2001-01-01T00:00:00'),
      locationId: ''
    };

  }
  ngOnInit(): void {
  }
  onAddYourEventSubmit() {

    this.addYourEventForm.controls['responseStatus'].patchValue('');

    this.addYourEventPayload.eventName = this.addYourEventForm.get('eventName')?.value;
    this.addYourEventPayload.eventDate = this.addYourEventForm.get('eventDate')?.value;
    this.addYourEventPayload.locationId = this.addYourEventForm.get('locationId')?.value;

    this.addYourEventService.postAddYourEvent(this.addYourEventPayload).subscribe(data => {
      this.addYourEventForm.controls['responseStatus'].patchValue('event added - ' + JSON.stringify(data));
    }, error => {
      console.log('append failed -- ' + error);
      this.addYourEventForm.controls['responseStatus'].patchValue(error);
    }
    );
  }
  
  onBacktohome(){
    this.router.navigate(['/']);
  }

}
