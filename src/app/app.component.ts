import { Component } from '@angular/core';
import { ICONS } from './socialIcons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anu Singh';
  icons = ICONS;
}
