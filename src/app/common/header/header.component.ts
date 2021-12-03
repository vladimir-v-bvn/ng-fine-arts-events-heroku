import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hamburgerspanOpen :boolean = false
  isVisible :boolean = false
  
  onClickHamburger() {
    this.isVisible = !this.isVisible
    this.hamburgerspanOpen = !this.hamburgerspanOpen
  }
}
