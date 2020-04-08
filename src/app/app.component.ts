import { Component, OnInit } from '@angular/core';
import { ICONS } from './socialIcons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anu Singh';
  icons = ICONS;
  isShow = false;
  mobile = false;

  ngOnInit() {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
      this.isShow = true;
    }
  }

  toggleDisplay() {
    if (this.mobile) {
      this.isShow = !this.isShow;
    }
  }
}
