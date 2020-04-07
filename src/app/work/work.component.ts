import { Component } from '@angular/core';
import { PROJECTS } from '../projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  projects = PROJECTS;

}
