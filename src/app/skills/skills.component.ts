import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [{ title: 'HTML', icon: 'html-5' }, 
  { title: 'CSS', icon: 'css3' }, 
  { title: 'Bootstrap', icon: 'bootstrap-4' }, 
  { title: 'jquery', icon: 'jquery-1' }, 
  { title: 'Javascript', icon: 'javascript' }, 
  { title: 'Angular', icon: 'angular' }, 
  { title: 'React', icon: 'react' }, 
  { title: 'Backbone', icon: 'backbone-icon' }, 
  { title: 'Handlebars', icon: 'handlebars' }, 
  { title: 'Web Accessibility', icon: 'accessibility' }];


}
