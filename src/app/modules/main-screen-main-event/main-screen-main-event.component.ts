import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-screen-main-event',
  templateUrl: './main-screen-main-event.component.html',
  styleUrls: ['./main-screen-main-event.component.css']
})
export class MainScreenMainEventComponent {

  @Input() processAnimation : boolean
  @Input() toggleVideoParallax : boolean

}
