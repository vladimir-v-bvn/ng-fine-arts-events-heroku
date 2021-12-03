import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-screen-video',
  templateUrl: './main-screen-video.component.html',
  styleUrls: ['./main-screen-video.component.css']
})
export class MainScreenVideoComponent {

  @ViewChild('bigVideo') videoPlayer: ElementRef

}
