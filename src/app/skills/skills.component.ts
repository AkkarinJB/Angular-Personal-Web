import { Component } from '@angular/core';
import { Router , RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
