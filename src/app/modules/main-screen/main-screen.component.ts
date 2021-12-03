import {AfterViewInit, Component, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';
import {MainScreenVideoComponent} from "../main-screen-video/main-screen-video.component";
import {PreloaderComponent} from "../preloader/preloader.component";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements AfterViewInit {

  toggleVideoParallax :boolean = true
  processAnimation :boolean = false

  constructor (private r: Renderer2) {}

  @ViewChild(MainScreenVideoComponent) mainScreenVideoComponent: MainScreenVideoComponent
  @ViewChild(PreloaderComponent) preloaderComponent: PreloaderComponent

  @Output() loadSections: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewInit() {
    this.setUpVideoAndParallax()
  }
  onToggleVideoParallaxChange(agreed: boolean) {
    this.toggleVideoParallax = !this.toggleVideoParallax
    //this.setUpVideoAndParallax()
    //this.setUpControlsAndSections()
  }

  onStopVideo(agreed: boolean) {
    const videoPlayer = this.mainScreenVideoComponent.videoPlayer.nativeElement
    videoPlayer.pause()
    setTimeout(() => videoPlayer.play(), 2500)
  }

  setUpVideoAndParallax() {
    if (this.toggleVideoParallax) {
      // @ts-ignore
      const videoPlayer = this.mainScreenVideoComponent.videoPlayer.nativeElement
      videoPlayer.muted = true
      videoPlayer.play()
      videoPlayer.onloadeddata = () => {
        console.log("video is loaded - " + Date())
        this.setUpControlsAndSections()
      }
      videoPlayer.onerror = () => {
        console.log("video is NOT loaded - " + Date());
        this.setUpControlsAndSections()
        this.toggleVideoParallax = false;
      };
    }
    else {
      this.setUpControlsAndSections()
    }
  }
  setUpControlsAndSections() {
    const preLoader = this.preloaderComponent.preLoader.nativeElement
    setTimeout(() => this.r.setStyle(preLoader, 'display','none'),1000)
    setTimeout(() => this.processAnimation = true, 1000)
    setTimeout(() => this.loadSections.emit(true), 3000)
    //$('.onload-animation').each(function(i)
    //  {setTimeout(() => {$('.onload-animation').eq(i).addClass('prosess-animation')}, 300 * i);
    //setTimeout(() => LoadSections(), 4000)
  }
}
