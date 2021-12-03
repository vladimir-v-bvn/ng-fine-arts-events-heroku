import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-main-screen-controls',
  templateUrl: './main-screen-controls.component.html',
  styleUrls: ['./main-screen-controls.component.css']
})
export class MainScreenControlsComponent {

  @Input() processAnimation : boolean
  @Input() toggleVideoParallax : boolean
  @Output() toggleVideoParallaxChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() stopVideo: EventEmitter<boolean> = new EventEmitter<boolean>();
  private tv: string = 'switch to video background'
  private tp: string = 'switch to parallax background'
  toggleVideoParallaxText: String = this.tp

  onToggleVideoParallaxChange() {
    this.toggleVideoParallaxText = this.toggleVideoParallaxText === this.tv ? this.tp : this.tv
    this.toggleVideoParallaxChange.emit(true)
  }
  onStopVideo() {
    this.stopVideo.emit(true)
  }

}
