import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen-parallax',
  templateUrl: './main-screen-parallax.component.html',
  styleUrls: ['./main-screen-parallax.component.css']
})
export class MainScreenParallaxComponent implements OnInit {
  parallaxtitle = 'it\'s dynamic text';
  parallaxnumber = 42;
  constructor() { }
  ngOnInit(): void {  }

}
